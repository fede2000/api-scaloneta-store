import { Currencies, PaymentItem } from "../core/types/mercadopago.ts";
import { OrderRequestDto, OrderResponseDto } from "../core/types/order.ts";
import { Result } from "../core/types/response.ts";
import { createPreference } from "../payment/paymentLogic.ts";
import { createOrder } from "./orderLogic.ts";

export const createOrderInteractor =async (OrderRequestDto:OrderRequestDto): Promise<Result<OrderResponseDto>> => {
    console.log("createOrderInteractor")
    const newOrder = await createOrder(OrderRequestDto);
    console.log(newOrder)

    if (!newOrder.success) {
      return newOrder;
    }

    //Creamos el pago
    let paymentItems: PaymentItem[] = [];
    OrderRequestDto.items.forEach((item) => {
      paymentItems.push({
        currency_id: Currencies.ARS,
        unit_price: item.unitPrice,
        title: item.title,
        quantity: item.quantity,
      });
    });

    const preference = await createPreference({
      external_reference: newOrder.result.id.toString(),
      items: paymentItems,
      shipmentCost: OrderRequestDto.shippingPrice,
    });
    //Restornamos el orderId y el init_point

    return {
      success: true,
      result: { orderId: newOrder.result.id, ...preference },
    };
}