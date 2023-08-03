import Meta from '@/components/ui/Meta';
import React, { FC } from 'react';
import Layout from '@/components/ui/layout/Layout';
import { useQuery } from '@tanstack/react-query';
import { OrderService } from '@/services/order/order.service';
import Heading from '@/components/ui/Heading';
import { orderStatusRu } from '@/services/orderStatus';
import Image from 'next/image';
import Link from 'next/link';

const Orders: FC = () => {
  const {
    data: orders,
    isLoading,
    isError,
  } = useQuery(['myOrders'], () => OrderService.getALL(), {
    select: ({ data }) => data,
  });
  console.log();
  return (
    <Meta title={'orders'}>
      <Layout>
        <Heading>Заказы</Heading>
        <section>
          <div className="flex flex-col gap-4 ">
            {orders &&
              orders.map((item) => (
                <div
                  key={item.id}
                  className=" shadow-md overflow-hidden rounded-lg "
                >
                  <div className="px-5 py-4 bg-gray-100 flex flex-row justify-between  ">
                    <div>
                      <span className="font-semibold text-xl ">
                        <span>Заказ от </span>
                        {new Date(
                          item.createdAt,
                        ).toLocaleDateString('ru-Ru')}
                      </span>
                      <span className="block text-xs text-blue font-medium">{`00${item.userId}-007-00${item.id}`}</span>
                    </div>
                    <div className="flex gap-2 items-baseline">
                      <span className="text-xs text-black">
                        {orderStatusRu(item.status)}{' '}
                      </span>
                      <span className="text-xl font-semibold">
                        {item.total}₽
                      </span>
                    </div>
                  </div>
                  <div className="px-5 py-4 flex gap-4">
                    {item.items &&
                      item.items.map((product) => (
                        <Link
                          href={`/product/${product.product.slug}`}
                        >
                          <Image
                            width={130}
                            height={100}
                            src={`${product.product.images}`}
                            alt={product.product.name}
                          />
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </section>
      </Layout>
    </Meta>
  );
};

export default Orders;
