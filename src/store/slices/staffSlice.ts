import {Staff} from "../../model/Staff.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState : Staff[] = []

const staffSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        saveStaff(state, action : PayloadAction<Staff>){
            state.push(action.payload)
        }
    }
})

export const {saveStaff} = staffSlice.actions
export default staffSlice.reducer