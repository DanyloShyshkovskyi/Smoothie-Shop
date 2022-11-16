import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {cartAction} from "@store/cart/cart.slice";
import {modalAction} from "@store/ui/modal/modal.slice";

const allActions = {
    ...cartAction,
    ...modalAction
}

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(allActions, dispatch)
}