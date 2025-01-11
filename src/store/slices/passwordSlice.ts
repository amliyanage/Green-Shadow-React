import {createSlice} from "@reduxjs/toolkit";

interface PasswordState {
    visible : boolean
}

const initialState : PasswordState = {
    visible : false
}

const passwordSlice = createSlice({
    name: 'passwordVisible',
    initialState,
    reducers: {
        togglePasswordVisibility(state) {
            state.visible = !state.visible
        }
    }
})

export const {togglePasswordVisibility} = passwordSlice.actions
export default passwordSlice.reducer