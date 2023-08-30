import { Router } from "express";
import * as controllers from "./categoryControllers";
import { body } from 'express-validator';
import { authAdminMiddleware, authMiddleware } from "../middleware/auth";
import { validateRequest } from "../middleware/validate-request";


export const categoryRouter = Router();

categoryRouter.post("/", 
    body('categoryName').notEmpty(),authMiddleware,authAdminMiddleware,
    validateRequest,
    controllers.createCategoryController
);  
categoryRouter.get("/",
controllers.getCategoriesController
);  