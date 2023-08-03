import React, {FC} from 'react';
import Layout from "@/components/ui/layout/Layout";
import Catalog from "@/components/ui/catalog/Catalog";
import Meta from "@/components/ui/Meta";
import {useProfile} from "@/hooks/useProfile";

const FavoritesPage: FC = () => {
    const {profile}=useProfile()
    return (
        <Meta title='Избранные'>
            <Layout>
                <Catalog products={profile?.favorites||[] }  title='Избранное'/>
            </Layout>
        </Meta>
    );
};

export default FavoritesPage;