import {CartContainer} from "./modalContainers/cartContainer/cartContainer";
import {AuthContainer} from "../forms/authContainer/authContainer";
import {IModalDialog} from "../../types/style.types";
import {UserDetails} from "../userDetails/userDetails";

export const ModalTypes = {
    cart: CartContainer,
    auth: AuthContainer,
    accountDetails: UserDetails
}

export interface IModalInitialState extends IModalDialog {
    isOpen: boolean,
}