import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice.ts";
import staffSlice from "./slices/staffSlice.ts";

export const store = configureStore({
    reducer: {
        user: userSlice,
        staff: staffSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch