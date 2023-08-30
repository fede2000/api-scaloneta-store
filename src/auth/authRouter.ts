import { Router } from "express";
import * as controllers from "./authControllers";
import { body } from 'express-validator';
import { validateRequest } from "../middleware/validate-request";

export const authRouter = Router();

authRouter.post("/register", 
  body('email').isEmail().withMessage('Error en Email'),
  body('name').trim().notEmpty().withMessage('Nombre obligatorio'),
  body('password').trim().notEmpty().withMessage('Password obligatorio'),
  validateRequest,
  controllers.registerController
);  
authRouter.post("/login",
  body('email').isEmail().withMessage('Error en Email'),
  body('password').trim().notEmpty().withMessage('Password obligatorio'),
  validateRequest,
  controllers.loginController
  );
authRouter.post("/refresh",controllers.refreshTokenController);