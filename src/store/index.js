import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { createStore } from "redux";

const initialCounterState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
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

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true
    },
    logout: state => {
      state.isAuthenticated = false
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
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  }
})

export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;

export default store;
