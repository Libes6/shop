import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import React, { FC } from 'react';
import {
  AiFillHeart,
  AiOutlineHeart,
} from 'react-icons/Ai';

import { useActions } from '@/hooks/useActions';
import { useProfile } from '@/hooks/useProfile';

import { ICartInterface } from '@/types/cart.interface';
import { IProduct } from '@/types/product.interface';

import { UserService } from '@/services/user/user.service';
import {ReviewService} from "@/services/review/review.service";
import {useFavorites} from "@/hooks/useFavorites";
import {useAuth} from "@/hooks/useAuth";

const FavoriteButton: FC<{ product: IProduct}> = ({
  product,
}) => {
  // const {addToCart,removeFromCart}=useActions()

const {user}=useAuth()

  // const {favorites } = useCart();

  const { profile } = useProfile();

console.log(profile)
console.log(product.name)
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    [`toggle favorite`],
    () => UserService.addFavorites(`${product.id}`),
    {
      onSuccess() {
        queryClient.invalidateQueries(['get profile']);
      },
    },
  );

    // const favorites = profile?.favorites;

    const isExist = profile?.favorites.some(
      (favorites: any) => favorites.id === product.id,
    );

    // const { addToCart, removeFromCart,addToFavorite,removeFromFavorite } = useActions();
    // const currentElement = favorites?.find(
    //     (cartItem: any) => cartItem.product?.id ===product.id,
    // );





  const onCurent = () => {



    // currentElement
    //   ? removeFromFavorite({ id: currentElement.id })
    //   : addToFavorite({ product, quantity: 1, price: product.price });
  };
  return (
    <div>
      {
        profile?<button onClick={()=>mutate()}>
          {isExist ? (
              <AiFillHeart color={'red'} size={26} />
          ) : (
              <AiOutlineHeart color={'red'} size={26} />
          )}
        </button>:null
      }

    </div>
  );
};

export default FavoriteButton;
