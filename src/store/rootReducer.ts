import { combineReducers } from 'redux'
import {productAction} from "@services/Actions/product.action";
import {cartReducer} from "@store/cart/cart.slice";
import {modalReducer} from "@store/ui/modal/modal.slice";
import {authAction} from "@services/Actions/auth.action";
import {otherAction} from "@services/Actions/other.action";

export default combineReducers({
    [productAction.reducerPath]: productAction.reducer,
    [authAction.reducerPath]: authAction.reducer,
    [otherAction.reducerPath]: otherAction.reducer,
    cart: cartReducer,
    modal: modalReducer
});