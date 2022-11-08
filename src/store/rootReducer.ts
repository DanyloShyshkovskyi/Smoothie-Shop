import { combineReducers } from 'redux'
import {productAction} from "../services/Actions/product.action";
import {mainLoaderReducer} from "./ui/mainLoader/mainLoader.slice";
import {cartReducer} from "./cart/cart.slice";
import {modalReducer} from "./ui/modal/modal.slice";
import {authAction} from "../services/Actions/auth.action";
import {otherAction} from "../services/Actions/other.action";

export default combineReducers({
    [productAction.reducerPath]: productAction.reducer,
    [authAction.reducerPath]: authAction.reducer,
    [otherAction.reducerPath]: otherAction.reducer,
    mainLoader: mainLoaderReducer,
    cart: cartReducer,
    modal: modalReducer
});