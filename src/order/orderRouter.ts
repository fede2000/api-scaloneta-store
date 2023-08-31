import { Router } from "express";

import { body } from 'express-validator';
import { authAdminMiddleware, authMiddleware } from "../middleware/auth.ts";
import { validateRequest } from "../middleware/validate-request.ts";
import { createOrderController } from "./orderControllers.ts";


export const orderRouter = Router();

orderRouter.post(
    "/",
    body('userId').isString().notEmpty(),
    body('shippingDetails').isObject().notEmpty(),
    body('items').isArray().notEmpty(),
    body('shippingPrice').isNumeric().notEmpty(),
    body('subtotal').isNumeric().notEmpty(),
    body('total').isNumeric().notEmpty(),
    authMiddleware,authAdminMiddleware,
    validateRequest,
    createOrderController

);  
