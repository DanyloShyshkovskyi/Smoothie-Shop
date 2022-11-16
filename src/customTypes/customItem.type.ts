import {InputHTMLAttributes} from "react";

export interface ICustomInput extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    messageHandler?: IMessageHandler
}

export interface IMessageHandler {
    messageLabel: string,
    visible: true,
    isError?: boolean
    isSuccess?: boolean
}