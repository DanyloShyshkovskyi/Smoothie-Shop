import {authAction} from "@services/Actions/auth.action";
import {otherAction} from "@services/Actions/other.action";
import {productAction} from "@services/Actions/product.action";
import {cartReducer} from "@store/cart";
import {modalReducer} from "@store/ui/modal";
import {combineReducers} from 'redux'

export default combineReducers({
    [productAction.reducerPath]: productAction.reducer,
    [authAction.reducerPath]: authAction.reducer,
    [otherAction.reducerPath]: otherAction.reducer,
    cart: cartReducer,
    modal: modalReducer
});