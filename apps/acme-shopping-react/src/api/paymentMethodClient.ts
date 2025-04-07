import axios from "axios";
import { PaymentData } from "../types/Payment.ts";

export const getPaymentMethod = async (userId: string): Promise<PaymentData> => {
  const response = await axios.get(`/api/payment-method/${userId}`);
  return response.data;
}; 