import {useQuery} from "@tanstack/react-query";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {TypeRootState} from "@/store/store";

export  const  useCart =()=>{
    const items = useTypedSelector((state:TypeRootState) => state.cart.items)
    const total = items.reduce((acc,item)=>acc+item.product.price * item.quantity,0)
    return {items,total}
}