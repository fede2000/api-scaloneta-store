
import {prisma} from '../config/db'
import { Result } from '../core/types/response';
import { BadRequestError } from '../errors/bad-request-error';
import { ServerError } from '../errors/server-error';
import { CategoryDto } from '../core/types/category';
import { OrderRequestDto } from '../core/types/order';
import { Order, OrderItems } from '../core/entities/orders';
import { v4 as uuid } from "uuid";

export const createOrder = async (data: OrderRequestDto): Promise<Result<Order>> => {
  console.log("createOrder")
    const state = await prisma().states.findUnique({
        where: { id: 2,state: 'pending' },
      });
      console.log("state",state)
      if (!state) {
        return { success: false, err: new ServerError('Error en el servidor') };
      }
      //mapeamos orderItems
    const oi: OrderItems[] = data.items.map((item) => {
        return {
          id: uuid(),
          unitPrice: item.unitPrice,
          quantity: item.quantity,
          productsId: item.productId,
        };
      });
      console.log(oi)
    try {
      console.log(data)
        const order: Order = await prisma().orders.create({
          
            data: {
              id: uuid(),
              userId: data.userId,
              statusId: state.id,
              shippingPrice: data.shippingPrice,
              subTotal: data.subtotal,
              total: data.total,
              OrderItems: {
                createMany: {
                  data: [...oi],
                },
              },
              ShippingDetails: {
                create: {
                  id: uuid(),
                  ...data.shippingDetails,
                },
              },
            },
          });
          console.log("order", order)

          return { success: true, result: order };
  } catch (error) {
    let err = new BadRequestError("Error al crear Orden!.")
    return { success: false, err}
  }
}