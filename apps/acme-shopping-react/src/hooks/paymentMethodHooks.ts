import { useQuery } from "@tanstack/react-query";
import { getPaymentMethod } from "../api/paymentMethodClient.ts";
import { PaymentData } from "../types/Payment.ts";

export const useGetPaymentMethod = (userId: string) => {
  return useQuery<PaymentData, Error>({
    queryKey: ["getPaymentMethod", userId],
    queryFn: () => getPaymentMethod(userId),
    enabled: !!userId,
  });
}; 