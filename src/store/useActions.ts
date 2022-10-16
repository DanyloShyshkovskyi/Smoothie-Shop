import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {mainLoaderAction} from "./ui/mainLoader/mainLoader.slice";
import {cartAction} from "./cart/cart.slice";
import {modalAction} from "./ui/modal/modal.slice";

const allActions = {
    ...mainLoaderAction,
    ...cartAction,
    ...modalAction
}

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(allActions, dispatch)
}