import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            id: "666",
            userName: "Bob",
            userEmail: "bob@gmail.com",
            userPassword: "1",
            token: false,
        },
    ],
    user: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signin: (state, action) => {
            state.user = action.payload;
        },
        signup: (state, action) => {
            state.users = [...state.users, action.payload];
        },
    },
});

export const { signin, signup } = userSlice.actions;
export default userSlice.reducer;
