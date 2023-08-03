
import  * as userActions from './user/user.actions'
import {cartSlice} from './cart/cartSlice'

export const rootActions ={
    ...userActions,
    ...cartSlice.actions
}