import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";
import { useGetUserInfo } from "./hooks/userHooks";
import { useGetCart, useClearCart } from "./hooks/cartHooks";
import { useCreateOrder } from "./hooks/orderHook";
import constructOrder from "./utils/helpers.ts";

export default function OrderReview() {
    const navigate = useNavigate();
    const {data: userInfo, isLoading: isUserInfoLoading} = useGetUserInfo();
    const {data: cartData} = useGetCart(userInfo?.userId || '');
    const { mutate: createOrder } = useCreateOrder(userInfo?.userId || '');
    const { mutate: clearCart } = useClearCart(userInfo?.userId || '');

    const handlePlaceOrder = async () => {
        if (!cartData || !userInfo) {
            return;
        }

        const order = constructOrder(
            cartData,
            userInfo.address,
            userInfo.deliveryMethod,
            userInfo.paymentMethod,
            userInfo.userId
        );

        createOrder(order, {
            onSuccess: () => {
                clearCart();
                navigate("/confirmation");
            },
        });
    };

    if (isUserInfoLoading) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom>
                Order Review
            </Typography>
            <Button
                variant="outlined"
                color="inherit"
                onClick={handlePlaceOrder}
                data-cy="order-button"
            >
                Place an order
            </Button>
        </Box>
    );
}
