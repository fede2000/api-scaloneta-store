import { Router } from "express";

import { body } from 'express-validator';
import { authAdminMiddleware, authMiddleware } from "../middleware/auth";
import { validateRequest } from "../middleware/validate-request";
import { createOrderController } from "./orderControllers";


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
