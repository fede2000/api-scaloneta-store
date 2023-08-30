interface OrderItems {
    title: string;
    quantity: number;
    unitPrice: number;
    productId: string;
  }
  
  export type OrderRequestDto = {
    userId: string;
    shippingDetails: {
      domicilio: string;
      localidad: string;
    };
    items: OrderItems[];
    shippingPrice: number;
    subtotal: number;
    total: number;
  }
  
  export type OrderResponseDto = {
    orderId: string;
    preferenceId: string;
    init_point: string;
  }