import {Dispatch, FormEvent, SetStateAction} from "react";
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
    image?: string,
    cart?: ICartIdProduct[]
}

export type IAuthForm = IAuthRegister | IAuthLogin

export type ISetFormData = Dispatch<SetStateAction<IAuthForm>>

export interface IDefaultForm {
    onSubmit: (e: FormEvent<HTMLFormElement>, formData: IAuthForm) => void,
    children?: JSX.Element | JSX.Element[],
    errorMessage?: string,
    isLoading?: boolean
    formElements: IFormElement[],
    strings: {
        submitLabel: string,
        title?: string
        options?: string,
    }
}

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