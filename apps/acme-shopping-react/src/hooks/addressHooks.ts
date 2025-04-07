import { useQuery } from "@tanstack/react-query";
import { getAddress } from "../api/addressClient.ts";
import { AddressData } from "../types/Address.ts";

export const useGetAddress = (userId: string) => {
  return useQuery<AddressData, Error>({
    queryKey: ["getAddress", userId],
    queryFn: () => getAddress(userId),
    enabled: !!userId,
  });
}; 