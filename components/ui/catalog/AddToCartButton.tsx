import React, { FC } from 'react';
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,

} from 'react-icons/Ai'

import {BsFillCartCheckFill} from  'react-icons/bs'

import { useActions } from '@/hooks/useActions';
import { useCart } from '@/hooks/useCart';

import { ICartInterface } from '@/types/cart.interface';
import { IProduct } from '@/types/product.interface';

const AddToCartButton: FC<{ product: IProduct }> = ({
  product,
}) => {
  // const {addToCart,removeFromCart}=useActions()

  const { items } = useCart();
  console.log(items);
  const { addToCart, removeFromCart } = useActions();
  const currentElement = items.find(
    (cartItem: any) => cartItem.product?.id === product.id,
  );
  const quantity: number = 1;
  const onCurent = () => {
    // currentElement
    //   ? removeFromCart({ id: currentElement.id })
    //   : addToCart({ product, quantity: 1, price: product.price });
  };
  return (
    <div>
      <button
        onClick={() =>
          currentElement
            ? removeFromCart({ id: currentElement.id })
            : addToCart({product,quantity,price:product.price})
        }
      >
        {currentElement ? (
          <BsFillCartCheckFill  size={26} />
        ) : (
          <AiOutlineShoppingCart  size={26} />
        )}
      </button>
    </div>
  );
};

export default AddToCartButton;
