import {IModalDialog} from "./style.types";
import {AuthContainer, CartContainer, UserDetailsContainer} from "@components/containers";

export const ModalTypes = {
    cart: CartContainer,
    auth: AuthContainer,
    accountDetails: UserDetailsContainer
}

export interface IModalInitialState extends IModalDialog {
    isOpen: boolean,
}