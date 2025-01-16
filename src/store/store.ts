import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice.ts";
import staffSlice from "./slices/staffSlice.ts";
import vehicleSlice from "./slices/VehicleSlice.ts";

export const store = configureStore({
    reducer: {
        user: userSlice,
        staff: staffSlice,
        vehicle : vehicleSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch