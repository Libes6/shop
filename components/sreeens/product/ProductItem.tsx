import React, {FC} from 'react';
import Meta from "@/components/ui/Meta";
import Layout from "@/components/ui/layout/Layout";
import Catalog from "@/components/ui/catalog/Catalog";
import {IProduct} from "@/types/product.interface";
import Image from "next/image";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/button/Button";
import ReviewsCard from "@/components/ui/reviews/ReviewsCard";
interface IProductItem{
    product:IProduct
}
const ProductItem: FC<IProductItem> = ({product}) => {
    console.log(product)
    return (
        <Meta title={'product'} description={'product page'}  >
            <Layout>
                <section className="mr-0 ml-0 mt-10">
                    <Heading className="mb-4">
                        {product.name}
                    </Heading>
                     <div className='flex justify-between gap-14'>
                         <Image src={`${product.images[0]}`} alt={product.name} width={400} height={400}/>
                         <div className='flex justify-center flex-col'>
                             <div className='bg-white rounded-2xl shadow-md py-6 px-6 flex gap-4 flex-col w-96'>
                                 <div className='flex gap-2 flex-col text-black'>
                                     <div className='font-bold text-xl text-black'>{product.name}</div>
                                     <div className='font-semibold text-xs'>{product.category.name}</div>
                                 </div>

                                 <div>
                                     <span className='font-semibold text-2xl py-1 px-2 bg-green rounded-2xl text-white inline-block'>  {product.price} ₽</span>
                                 </div>

                                 <div className='bg-gray-100 rounded-2xl px-2 py-4 text-xs'>
                                     <span className='px-1 py-1 rounded-lg bg-primary'>{`${Math.round(product.price/6)}₽`}</span>
                                     {` × 6 месяцев в  Ozon Рассрочку`}
                                 </div>

                                     <Button  variant={'dark'}>В корзину</Button>


                             </div>
                         </div>
                     </div>
                    <div className='mt-10'>
                        <h3 className='font-bold text-1.5xl text-black'>Описание </h3>
                        <p className='font-normal text-xs whitespace-pre-wrap text-black'>{product.description}</p>
                    </div>

                    <div className='mt-10 w-2/3'>
                        <h3 className='font-bold text-1.5xl text-black'>Комментарии </h3>
                        <div className='flex flex-col gap-8'> {product && product.reviews.map(item=><ReviewsCard review={item}/>)}</div>

                    </div>

                </section>


            </Layout>

        </Meta>
    );
};

export default ProductItem;