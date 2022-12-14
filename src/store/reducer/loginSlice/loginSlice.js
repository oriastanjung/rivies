import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "admin@gmail.com",
  password: "admin",
  username: "User",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state) => {
      console.log(state);
    },
    changeUserName: (state, action) => {
      state.username = action.payload;
    },
    resetDataLogin: (state) => {
      console.log("reset");
      state.email = initialState.email;
      state.password = initialState.password;
      state.username = initialState.username;
    },
  },
});

export const { login, changeUserName, resetDataLogin } = loginSlice.actions;
export default loginSlice.reducer;
