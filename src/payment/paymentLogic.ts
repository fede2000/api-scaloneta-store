import { prisma } from "../config/db.ts";
// import { configure, preferences } from 'mercadopago';
import pkg from 'mercadopago';
const { configure, preferences } = pkg;
import {MercadoPagoResponse,MercadoPagoPaymentRequest} from "../core/types/mercadopago.ts"

import { CreatePreferencePayload } from 'mercadopago/models/preferences/create-payload.model';

export const createPreference = async (data: MercadoPagoPaymentRequest): Promise<MercadoPagoResponse> => {
    configureMercadopagoSDK()
    const preferenceData: CreatePreferencePayload = {
        ...data,
        back_urls: {
          pending: process.env.PENDING_URL!,
          success: process.env.SUCCESS_URL!,
          failure: process.env.FAILURE_URL!,
        },
        shipments: {
          cost: data.shipmentCost,
        },
      };
    //   creamos preferencia
      const preference = await preferences.create(preferenceData);
      return {
        preferenceId: preference.body.id,
        init_point: preference.body.init_point,
        sandbox_init_point: preference.body.sandbox_init_point,
      }
}

function configureMercadopagoSDK() {
    configure({
      access_token: process.env.ACCESS_TOKEN_MP!,
    });
  }