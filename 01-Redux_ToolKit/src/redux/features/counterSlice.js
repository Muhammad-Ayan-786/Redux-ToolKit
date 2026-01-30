import { createSlice } from "@reduxjs/toolkit";

// createSlice does 3 things for you automatically:
// 1) Creates initial state
// 2) Creates reducer functions
// 3) Creates action creators

export const counterSlice = createSlice({
  // name is used internally by Redux (good practice)
  name: 'counter',

  // initialState = starting data of this slice
  initialState: {
    value: 0
  },

  // reducers = functions that CHANGE the state
  reducers: {

    // state = current data of THIS slice
    increment: (state) => {
      // Redux Toolkit allows us to "mutate" state
      // Behind the scenes, Redux keeps it safe
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    // action = object sent when dispatching
    // action.payload = value passed while dispatching
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

// These are ACTIONS
// We dispatch these from components
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// This is the FINAL reducer function
// configureStore needs ONE reducer, not reducers
export default counterSlice.reducer;


/*
dispatch(incrementByAmount(5))

// becomes ↓
{
  type: "counter/incrementByAmount",
  payload: 5
}

*/