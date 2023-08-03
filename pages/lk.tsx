import React, {FC} from 'react';
import {NextPageAuth} from "@/providers/auth-provider/auth-page.types";
import {useProfile} from "@/hooks/useProfile";
import Image from "next/image";
import Meta from '@/components/ui/Meta';
import Layout from '@/components/ui/layout/Layout';
import PrivateCabinet from "@/components/sreeens/lk/PrivateCabinet";

const PrivateCabinetPage: NextPageAuth = () => {
    const {profile}= useProfile()
    console.log(profile)
    return <PrivateCabinet/>
};

PrivateCabinetPage.isOnlyUser
export default PrivateCabinetPage;