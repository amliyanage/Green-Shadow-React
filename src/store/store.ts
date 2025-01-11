import {configureStore} from "@reduxjs/toolkit";
import passwordReducer from "./slices/passwordSlice.ts";

export const store = configureStore({
    reducer: {
        passwordVisible: passwordReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch