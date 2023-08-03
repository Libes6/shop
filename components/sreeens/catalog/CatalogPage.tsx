import React, {FC} from 'react';
import Layout from "@/components/ui/layout/Layout";
import Meta from "@/components/ui/Meta";
import {NextPageAuth} from "@/providers/auth-provider/auth-page.types";
import CategoryCard from './CategoryCard';
import Heading from "@/components/ui/Heading";
interface  ICatalogPageProps{
   categories:any
}
const CatalogPage: FC<ICatalogPageProps> = ({ categories}) => {
    console.log(categories)
    return (
        <Meta title='Каталог'>
            <Layout>
                <section className="mr-32 ml-32 mt-10">
                    <Heading className="mb-4">
                        Категории
                    </Heading>
                    <div className='flex gap-16'>
                        <div>
                            <h2 className='text-secondary font-normal text-xl mb-2'>
                                Одежда
                            </h2>
                            <div className='flex flex-col gap-2'>
                                {categories && categories.map((item:any)=><CategoryCard key={item.id} {...item}/>)}
                            </div>
                        </div>

                    </div>


                </section>


            </Layout>
        </Meta>
    );
};

export default CatalogPage;