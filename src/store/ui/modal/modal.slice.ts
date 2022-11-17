import {IModalInitialState} from "@customTypes/modal.types";
import {IModalDialog} from "@customTypes/style.types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: IModalInitialState = {
    isOpen: false,
    type: undefined
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<IModalDialog['type']>) => {
            state.isOpen = true
            state.type = action.payload
        },
        closeModal: (state) => {
            state.isOpen = false
            state.type = undefined
        }
    }
})