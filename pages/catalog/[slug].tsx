import React, { FC } from 'react';
import { useRouter } from 'next/router';
import {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from 'next';
import { CategoryService } from '@/services/category/category.service';
import { ProductService } from '@/services/product/product.service';
import Catalog from "@/components/ui/catalog/Catalog";
import CatalogCategoryPage from "@/components/sreeens/catalog/CatalogCategoryPage";
interface ICatalogSlug{
    products:any
    category:any
}
const SlugCatalog: NextPage<ICatalogSlug> = ({category,products}) => {
    console.log(category)
    console.log(products)
  const router = useRouter();
  return <CatalogCategoryPage title={category.name as string} product={products}/>
};
export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await CategoryService.getALL();
  const paths = categories.data.map((category) => {
    return { params: { slug: category.slug } };
  });
  return { paths, fallback: 'blocking' };
};
export const getStaticProps: GetStaticProps = async ({
  params,
}) => {
  const { data: products } =
    await ProductService.getSlugCategory(
      params?.slug as string
    );
  const { data: category } =
    await CategoryService.getBySlug(params?.slug as string);
  console.log(category)
  return {
    props: { products, category },
  };
};
export default SlugCatalog;
