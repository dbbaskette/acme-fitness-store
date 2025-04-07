import axios from "axios";

export const getDeliveryMethod = async (userId: string): Promise<string> => {
  const response = await axios.get(`/api/delivery-method/${userId}`);
  return response.data;
}; 