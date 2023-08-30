
export interface Order {
    id: string;
    userId: string;
    paymentId?: string | null;
    merchanOrderId?: string | null;
    created_at: Date;
    updated_at: Date;
    statusId: number;
}

export interface OrderItems {
    id: string;
    quantity: number;
    unitPrice: number;
    ordersId?: number;
    productsId: string;
}