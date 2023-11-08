import { createSlice } from "@reduxjs/toolkit";

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

export const counterAction = counterSlice.actions

export default counterSlice.reducer;

