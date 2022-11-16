import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct, ICartIdProduct} from "@customTypes/product.types";

const initialState:ICartIdProduct[] = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action:PayloadAction<IProduct['id']>) => {
            const thisProductIndex = state.findIndex((product) => product.id === action.payload)

            if (thisProductIndex !== -1) {
                state[thisProductIndex].count += 1
                return
            }

            const NewPayload = {
                id: action.payload,
                count: 1
            } as ICartIdProduct
            state.push(NewPayload)
        },
        removeFromCart: (state, action:PayloadAction<IProduct['id']>) => {
            const thisProductIndex = state.findIndex((product) => product.id === action.payload)

            if (thisProductIndex === -1) return

            const count = state[thisProductIndex].count
            if (count !== 1) {
                state[thisProductIndex].count -= 1
                return
            }

            return state.filter(product => product.id !== action.payload)
        },
        concatCarts: (state, action:PayloadAction<ICartIdProduct[]>) => {
            action.payload.forEach(item => {
                const thisProductIndex = state.findIndex((product) => product.id === item.id)

                if (thisProductIndex !== -1) {
                    return state[thisProductIndex].count += item.count
                }

                const NewPayload = {
                    id: item.id,
                    count: item.count
                } as ICartIdProduct

                state.push(NewPayload)
            })
        },
        clearCart: (state) => {
            state = []
            return state
        }
    }
})

export const cartReducer = cartSlice.reducer
export const cartAction = cartSlice.actions