import { NextFunction, Request, Response } from "express";
import { OrderRequestDto, OrderResponseDto } from "../core/types/order";
import { Result } from "../core/types/response";
import { createOrderInteractor } from "./orderInteractor";

export const createOrderController = async (  req: Request,
    res: Response,
    next: NextFunction) => {
        console.log("createOrderController")
    const order = await createOrderInteractor(req.body);
    console.log(order)

    if (!order.success) {
      return next(order.err);
    }
  
    res.status(200).json({ state: 'success', data: order });
}