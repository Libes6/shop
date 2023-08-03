import React, {FC} from 'react';
import {NextPageAuth} from "@/providers/auth-provider/auth-page.types";
import Orders from "@/components/sreeens/orders/Orders";

const MyOrders: NextPageAuth = () => {
    return <Orders/>
};
MyOrders.isOnlyUser
export default MyOrders;