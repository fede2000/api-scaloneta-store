export enum Currencies {
    ARS = 'ARS',
  }
  
export type PaymentItem = {
    title?: string;
    description?: string;
    quantity: number;
    currency_id: Currencies;
    unit_price: number;
    picture_url?: string;
  }
  
export type MercadoPagoResponse = {
    preferenceId: string;
    init_point: string;
    sandbox_init_point: string;
  }
  
export type MercadoPagoPaymentRequest = {
    items: PaymentItem[];
    external_reference: string;
    shipmentCost: number; //ID DE NUESTRA ORDEN
  }