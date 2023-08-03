import {useQuery} from "@tanstack/react-query";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {TypeRootState} from "@/store/store";

export  const  useFavorites =()=>useTypedSelector((state:TypeRootState) => state.cart.favorites)