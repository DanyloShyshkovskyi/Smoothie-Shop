import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IModalInitialState} from "../../../components/modal/modal.types";
import {IModalDialog} from "../../../types/style.types";

const initialState: IModalInitialState = {
    isOpen: false,
    type: undefined
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action:PayloadAction<IModalDialog['type']>) => {
            state.isOpen = true
            state.type = action.payload
        },
        closeModal: (state) => {
            state.isOpen = false
            state.type = undefined
        }
    }
})

export const modalReducer = modalSlice.reducer
export const modalAction = modalSlice.actions