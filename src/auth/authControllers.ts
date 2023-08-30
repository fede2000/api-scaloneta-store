import { NextFunction, Request, Response } from "express";
import {login, refreshToken, register} from "./authLogic"
import { prisma } from "../config/db";

export const loginController = async (req: Request, res: Response, next: NextFunction) => {
   const { email, password } = req.body;

    const result = await login(email, password)
    if (!result.success) {
        return next(result.err);
      }
      res.status(200).json({
        message: 'success',
        ...result,
      })
}

export const registerController = async (req: Request, res: Response,next: NextFunction) => {
    const { email, password, name, roleId } = req.body;
    const userExist = await prisma().user.findUnique({ where: { email: email } });
        if (userExist) {
            res.status(400).json({ message: "Email already exists" });
            return next();
        }
        const result = await register(email, password, name, roleId)
        res.status(200).json({
            message: 'success',
            ...result,
          })
}

export const refreshTokenController = async (req: Request, res: Response) => {
    const header = req.headers.authorization;

    if (!header) {
      res.status(401).json({ message: "NOT AUTHORIZED: TOKEN NOT PRESENT" });
      return;
    }
    const token = header.split(" ")[1];

    try{
        const result = await refreshToken(token)
        res.json(result)
        return;
    } catch (err){
        res.status(500).json({ message: "NOT AUTHORIZED" });
        return;
    }
}