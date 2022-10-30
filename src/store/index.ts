import reducers from "./rootReducer"

import {configureStore} from "@reduxjs/toolkit";
import {productAction} from "../services/Actions/product.action";
import {authAction} from "../services/Actions/auth.action";

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddlware) =>
        getDefaultMiddlware()
            .concat(productAction.middleware)
            .concat(authAction.middleware)
});


export type TypeRootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
