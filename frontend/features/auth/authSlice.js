import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: undefined,
    role: 'applicant'
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        resetStateAuth: () => {
            return initialState;
        },
        setToken: (state, _action) => {
            state.token = _action.payload;
            return state;
        },
        setRole: (state, _action) => {
            state.role = _action.payload;
            return state;
        }
    },
});

export const {
    resetStateAuth,
    setToken,
    setRole
} = authSlice.actions;
export default authSlice.reducer;
