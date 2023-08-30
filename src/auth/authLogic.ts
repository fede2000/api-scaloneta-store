import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {prisma} from '../config/db'
import { getConfig } from '../config/config'
import { v4 as uuid } from "uuid";
import { error } from 'console';
import { AuthDto, loginResponse } from '../core/types/auth';
import { Result } from '../core/types/response';
import { BadRequestError } from '../errors/bad-request-error';



export const login = async (email: string, password: string): Promise<Result< AuthDto>> =>{ 
    try {
        const user = await prisma().user.findUnique({
           where: {
             email: email 
            },
            include: {
               role: true
              },
          }
           );
        if (user === null) {
          return{
            success: false,
            err: new BadRequestError('Usuario no existe'),
          }
        }
        const result = await bcrypt.compare(password, user.password);
        if (result) {
          const accessToken = jwt.sign(
            { email: email, userId: user.id,role: user.role.role },
            getConfig().accesTokenSecret,
            {
              expiresIn: "1h",
            }
          );
          const refreshToken = jwt.sign({ email: email }, getConfig().refreshTokenSecret, {
            expiresIn: "72h",
          });
          return {  
            success: true,
            result: {
            userId: user.id,
            name: user.name,
            email: user.email,
            token: accessToken,
            expiresIn: "1h",
            role: {
              roleId: user.roleId,
              roleName: user.role.role,
          }}};
        }
        return {
          success: false,
          err: new BadRequestError('Error en usuario o contraseña'),
        };


        throw new Error("Invalid password");
      } catch (err) {
       throw err;
      }
}

export const register = async (email: string, password: string, name: string, roleId: number): Promise<Result< AuthDto>> => {
// validar que el email no exista!

  const hash = await bcrypt.hash(password, 10);
  try {

    const user = await prisma().user.create({
        data: {
          id: uuid(),
          name: name,
          email: email,
          password: hash,
          roleId: roleId
        },
        include: {
          role: true,
        },
      });
    //   incio de sesion al crearse
    const accessToken = jwt.sign(
        { email: email, userId: user.id,role: user.role.role },
        getConfig().accesTokenSecret,
        {
          expiresIn: "1h",
        }
      );
      const refreshToken = jwt.sign({ email: email }, getConfig().refreshTokenSecret, {
        expiresIn: "72h",
      });
      return {
        success: true,
          result: {
          userId: user.id,
          name: user.name,
          email: user.email,
          token: accessToken,
          expiresIn: "1h",
          role: {
            roleId: user.roleId,
            roleName: user.role.role,
          }
        }};
  } catch (err) {
    throw err
  }
}

export const refreshToken = async (token: string): Promise<loginResponse> => {
  try {
    const data = jwt.verify(token, getConfig().refreshTokenSecret);
    if (data) {
      const dataparsed = data as unknown as {email:string};

      const user = await prisma().user.findUnique({
        where: { email: dataparsed.email },
      });
      if (user === null) {
       throw new Error('USER NOT FOUND')
      }
      const accessToken = jwt.sign(
        { email: user.email, role: "admin" },
        getConfig().accesTokenSecret,
        {
          expiresIn: "1h",
        }
      );
      const refreshToken = jwt.sign({ email: user.email }, getConfig().refreshTokenSecret, {
        expiresIn: "72h",
      });
      return { accessToken: accessToken, refreshToken: refreshToken };
      
    }
  } catch (err: any) {
    if (err.name === "TokenExpiredError") {
      throw new Error( "NOT AUTHORIZED: TOKEN EXPIRED" );
    }
    throw new Error("NOT AUTHORIZED: TOKEN NOT VALID" );
  }
  throw new Error( "NOT AUTHORIZED: TOKEN NOT VALID" );
}

