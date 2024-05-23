import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { authenticationSlice } from "./authenticationSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    authentication: authenticationSlice.reducer,
  },
});

// const counteReducer = (state = initialState, action) => {
//   if (action.type === "increment")
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   if (action.type === "decrement")
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   if (action.type === "increase")
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   if (action.type === "toggle")
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };

//   return state;
// };
