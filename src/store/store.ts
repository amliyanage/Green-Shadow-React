import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice.ts";
import staffSlice from "./slices/staffSlice.ts";
import vehicleSlice from "./slices/VehicleSlice.ts";
import fieldSlice from "./slices/FieldSlice.ts";
import equSlice from "./slices/EquSlice.ts";

export const store = configureStore({
    reducer: {
        user: userSlice,
        staff: staffSlice,
        vehicle : vehicleSlice,
        field: fieldSlice,
        equ : equSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch