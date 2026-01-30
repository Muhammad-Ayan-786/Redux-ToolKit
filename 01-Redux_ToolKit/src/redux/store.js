// configureStore is used to create the Redux store
// Think of store as a BIG BOX that holds all app data
import { configureStore } from "@reduxjs/toolkit";

// This is the reducer coming from counterSlice
// It knows HOW to update counter data
import counterReducer from "./features/counterSlice";

// Creating the store
export const store = configureStore({
  reducer: {
    // counter is the NAME of this slice in the store
    // state.counter will exist because of this
    counter: counterReducer
  }
});

/*
After this, your Redux state looks like:

{
  counter: {
    value: 0
  }
}
*/