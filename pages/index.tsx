import {GetStaticProps, NextPage} from 'next';
import { Inter } from 'next/font/google';
import Home from "@/components/sreeens/home/Home";
import {IProduct, TypePaginationProducts, TypeProducts} from "@/types/product.interface";
import {ProductService} from "@/services/product/product.service";

const inter = Inter({
  subsets: ['latin'],
});

const HomePage: NextPage<TypePaginationProducts> = ({product,length}) => {


  return <Home length={length} product={product} />
}

export const getStaticProps:GetStaticProps<TypePaginationProducts> =async ()=>{
  const {data} =await ProductService.getALL({page:1,perPage:10})
  console.log(data)
  return {
    props:data
  }
}

export default HomePage;
