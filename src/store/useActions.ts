import {bindActionCreators} from "@reduxjs/toolkit";
import {cartAction} from "@store/cart";
import {modalAction} from "@store/ui/modal";
import {useDispatch} from "react-redux";

const allActions = {
    ...cartAction,
    ...modalAction
}

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(allActions, dispatch)
}