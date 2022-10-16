import {IFormElement, ISetFormData} from "../../types/auth.types";
import {ChangeEvent} from "react";

export const onFormInputChange = (event: ChangeEvent<HTMLInputElement>, setData: ISetFormData) => setData(prevState => ({
    ...prevState,
    [event.target.name]: event.target.value
}))

export const createFormState = (array: IFormElement[]): any => {
    var obj = {}  as any;
    array.forEach(item => {
        obj[item.name] = 'k'

    })
    return obj
}