import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: true
}

export const mainLoaderSlice = createSlice({
    name: 'mainLoader',
    initialState,
    reducers: {
        openLoader: (state) => {
            state.isOpen = true
        },
        closeLoader: (state) => {
            state.isOpen = false
        }
    }
})

export const mainLoaderReducer = mainLoaderSlice.reducer
export const mainLoaderAction = mainLoaderSlice.actions