import { AddressData } from "./Address.ts";
import { PaymentData } from "./Payment.ts";

export interface UserInfo {
    userId: string;
    userName: string;
    address: AddressData;
    deliveryMethod: string;
    paymentMethod: PaymentData;
}