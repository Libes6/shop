import React, { FC, PropsWithChildren } from 'react';
import { useOutside } from '@/hooks/useoutsideclick';
import clsx from 'clsx';
import { useCart } from '@/hooks/useCart';
import { IProduct } from '@/types/product.interface';
import { ICartInterface } from '@/types/cart.interface';
import CartCard from '@/components/ui/cart/CartCard';
import Button from '@/components/ui/button/Button';
import Badge from '@/components/ui/badge/Badge';
import Image from 'next/image';
import { useMutation } from '@tanstack/react-query';
import { OrderService } from '@/services/order/order.service';
import {useRouter} from "next/router";

const HeaderCart: FC<PropsWithChildren> = ({
  children,
}) => {
  const { items, total } = useCart();
  const { isShow, setIsShow, ref } = useOutside(false);

  const {push}=useRouter()
  const { mutate } = useMutation(
    ['create order and payment'],
    () =>
      OrderService.placeOrder({
        items:items.map(item=>({
           price:item.price,
          quantity:item.quantity,
          productId:item.product.id
        })),}),{
      onSuccess({data}){
        push(data.confirmation.confirmation_url)
      }
      })


  return (
    <div
      ref={ref}
      className="relative"
      onClick={() => setIsShow(true)}
    >
      <Badge index={items.length} children={children} />
      <div
        className={clsx(
          `absolute  top-[2.2rem] -left-64 w-[30rem]  bg-gray-100 rounded-xl px-5 py-3 text-sm menu z-20  shadow-md`,
          isShow ? 'open-menu' : 'close-menu',
        )}
      >
        {items && items.length > 0 ? (
          <div className="sticky">
            <div className="flex gap-3 flex-col relative overflow-scroll overflow-x-hidden max-h-80">
              {items.map((item: ICartInterface) => (
                <CartCard key={item.id} {...item} />
              ))}
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="text-black text-xl">
                Всего: {total} ₽
              </div>
              <Button variant={'dark'} onClick={()=>mutate()}>
                Оформить заказ
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex items-center flex-col">
            <Image
              src={'/images/no-data.png'}
              alt={'2'}
              width={120}
              height={120}
            />
            <p>Корзина пуста</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderCart;
