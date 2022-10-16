import {Dispatch, SetStateAction} from "react";
import {ICartIdProduct} from "./product.types";

export interface IAuthLogin {
    email: string,
    password: string,
}

export interface IAuthRegister extends IAuthLogin {
    name: string,
    passwordRepeat?: string,
}

export interface IAuthData {
    uid: string,
    keyId: string,
    name: string,
    email: string,
    cart?: ICartIdProduct[]
}

export type ISetFormData = Dispatch<SetStateAction<IAuthRegister>>

export type IFormElement = {
    label: string,
    placeholder: string,
    name: string,
    type: string,
}

export type IUpdateData = {
    id: string,
    data: any
}