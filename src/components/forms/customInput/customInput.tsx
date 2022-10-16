import {FC} from "react";
import {ICustomInput} from "../../../types/customItem.type";
import {FormGroup} from "./customInput.style";

export const CustomInput: FC<ICustomInput> = ({label, messageHandler, ...inputProps}) => {

    return (
        <FormGroup>
            <input {...inputProps}/>
            <label htmlFor={inputProps.id}>{label}</label>
            {messageHandler?.visible && <span className={"form__optional"}>{messageHandler.messageLabel}</span>}
        </FormGroup>
    )
}