import { configureStore } from "@reduxjs/toolkit";

import counterReducer from '../store/counter'
import authReducer from '../store/auth'

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//     };
//   }
//   return state;
// };

// const store = createStore(counterReducer);

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
})

export default store;
