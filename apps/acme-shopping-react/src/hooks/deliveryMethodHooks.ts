import { useQuery } from "@tanstack/react-query";
import { getDeliveryMethod } from "../api/deliveryMethodClient.ts";

export const useGetDeliveryMethod = (userId: string) => {
  return useQuery<string, Error>({
    queryKey: ["getDeliveryMethod", userId],
    queryFn: () => getDeliveryMethod(userId),
    enabled: !!userId,
  });
}; 