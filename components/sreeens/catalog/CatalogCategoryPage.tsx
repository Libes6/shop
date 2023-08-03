import React, {FC} from 'react';
import {IProduct} from "@/types/product.interface";
import Layout from "@/components/ui/layout/Layout";
import Meta from "@/components/ui/Meta";
import Catalog from "@/components/ui/catalog/Catalog";

interface ICatalogCategoryPage{
    title:string
    product:IProduct[]
}
const CatalogCategoryPage: FC<ICatalogCategoryPage> = ({title,product}) => {
    return (
        <Meta title='Каталог'>
            <Layout>
                <Catalog products={product} title={`Продукты из категории ${title}`}/>
            </Layout>
        </Meta>
    );
};

export default CatalogCategoryPage;