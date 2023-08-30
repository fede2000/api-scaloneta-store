import { NextFunction, Request, Response } from "express";
import { createCategory, getCategories } from "./categoryLogic";



export const createCategoryController = async (req: Request, res: Response, next: NextFunction) => {
    // obtenemos del body el nombre de la categoria a crear
    const { categoryName} = req.body;
    const result = await createCategory(categoryName)
    if (!result.success){
        return next(result.err)
    }
    res.status(200).json({state: 'success', data: result});
}
export const getCategoriesController = async (req: Request, res: Response, next: NextFunction) => {
        const result = await getCategories()
        if (!result.success){
            return next(result.err)
        }
        res.status(200).json({state: 'success', data: result});
}