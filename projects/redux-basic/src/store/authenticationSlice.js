import { createSlice } from "@reduxjs/toolkit";

const initialState = { authenticated: false, user: null };

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.authenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.authenticated = false;
      state.user = null;
    },
  },
});

export const authenticationActions = authenticationSlice.actions;
