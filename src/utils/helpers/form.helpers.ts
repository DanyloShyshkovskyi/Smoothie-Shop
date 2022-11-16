import {IAuthForm, IFormElement, ISetFormData} from "@customTypes/auth.types";
import {ChangeEvent} from "react";

export const onFormInputChange = (event: ChangeEvent<HTMLInputElement>, setData: ISetFormData) => setData(prevState => ({
    ...prevState,
    [event.target.name]: event.target.value
}))

export const createFormState = (array: IFormElement[]): IAuthForm => {
    var obj = {}  as any;
    array.forEach(item => {
        obj[item.name] = ''

    })
    return obj
}