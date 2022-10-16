import {ModalTypes} from "../components/modal/modal.types";

export interface ArrowsProps {
    next?: boolean,
    prev?: boolean,
    disabled?: boolean
}

export interface IProductCountButton {
    plus?: boolean,
    minus?: boolean,
    disabled?: boolean
}

export interface IAuthContainer {
    rightPanelActive?: boolean,
}

export interface IModalContainer {
    show?: boolean,
}

export interface IModalDialog {
    type?: keyof typeof ModalTypes,
}

export interface IProgressButtonStyle {
    loading?: boolean,
    success?: boolean,
    error?: boolean,
    pathCircle?: number,
    pathCheckmark?: number,
    pathCross?: number,
}