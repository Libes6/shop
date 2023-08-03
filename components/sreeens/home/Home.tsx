import { useRouter } from 'next/router';
import React, { FC } from 'react';

import Heading from '@/components/ui/Heading';
import Meta from '@/components/ui/Meta';
import Button from '@/components/ui/button/Button';
import AddToCartButton from '@/components/ui/catalog/AddToCartButton';
import Catalog from '@/components/ui/catalog/Catalog';
import Layout from '@/components/ui/layout/Layout';

import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';

import {
  TypePaginationProducts,
  TypeProducts,
} from '@/types/product.interface';
import CatalogPagination from "@/components/ui/catalog/CatalogPagination";

const Home: FC<TypePaginationProducts> = ({
  product,
  length,
}) => {
  console.log(product);
  return (
    <Meta title={'home'} description={'home page'}>
      <Layout>
        <CatalogPagination
          products={product}
          isLoading={false}
          length={length}
          title={'Новые'}
        />
      </Layout>
    </Meta>
  );
};

export default Home;
