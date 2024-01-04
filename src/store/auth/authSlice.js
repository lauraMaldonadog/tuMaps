import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'checking', 'not-authenticated', 'authenticated'
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, { payload }) => {
        },
        logout: (state, { payload }) => {
        },
        checkingCredentials: (state) => {
        }
    }
});
export const { login, logout, checkingCredentials } = authSlice.actions;