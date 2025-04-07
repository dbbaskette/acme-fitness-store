import axios from "axios";
import { AddressData } from "../types/Address.ts";

export const getAddress = async (userId: string): Promise<AddressData> => {
  const response = await axios.get(`/api/address/${userId}`);
  return response.data;
}; 