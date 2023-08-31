import { Router } from "express";
import * as controllers from "./categoryControllers.ts";
import { body } from 'express-validator';
import { authAdminMiddleware, authMiddleware } from "../middleware/auth.ts";
import { validateRequest } from "../middleware/validate-request.ts";


export const categoryRouter = Router();

categoryRouter.post("/", 
    body('categoryName').notEmpty(),authMiddleware,authAdminMiddleware,
    validateRequest,
    controllers.createCategoryController
);  
categoryRouter.get("/",
controllers.getCategoriesController
);  