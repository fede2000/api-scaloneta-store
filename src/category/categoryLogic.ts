
import { Category } from '@prisma/client';
import { v4 as uuid } from "uuid";
import {prisma} from '../config/db'
import { Result } from '../core/types/response';
import { BadRequestError } from '../errors/bad-request-error';
import { ServerError } from '../errors/server-error';
import { CategoryDto } from '../core/types/category';

// CREATE CATEGORY

export const createCategory = async (categoryName: string): Promise<Result< any>> => {
    try {
      // Creacion de la categoria
    const category = await prisma().category.create({
      data: {
        category: categoryName,
      }
      })

    return { success: true, result:  category}
  } catch (error) {
    let err = new BadRequestError("Error al crear categoria!.")
    return { success: false, err}
  }
}

//  GET ALL CATEGORIES

export const getCategories = async (): Promise<Result<any>> => {

    try { 
      // Traer todas las categorias
      const categories = await prisma().category.findMany({

        include: {
          products: true,
        }
      });

      return { success: true, result:  categories}
  } catch (error) {
    let err = new ServerError("Algo salio mal al traer las categorias.")
    return { success: false, err}
  }
}
