import {configureStore} from "@reduxjs/toolkit";
import passwordReducer from "./slices/passwordSlice.ts";
import userSlice from "./slices/userSlice.ts";

export const store = configureStore({
    reducer: {
        passwordVisible: passwordReducer,
        user: userSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch