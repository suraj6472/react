import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { createStore } from "redux";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    increase: (state, action) => {
      state.counter = state.counter + action.payload // {type: RANDOM_UNIQUE_STRING, payload: value} // payload is fix not controlled by us
    },
    showCounter: (state) => {
      state.showCounter = !state.showCounter
    }
  }
})

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
  reducer: counterSlice.reducer
})

export const counterAction = counterSlice.actions;

export default store;
