import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodo = createAsyncThunk('fetchTodo', async () => {
  const responce = await axios.get('https://jsonplaceholder.typicode.com/todos')
  return responce.data;
})

/*
• createAsyncThunk(name, callback).
• createAsyncThunk creates an action, than can be dispatched.
• createAsyncThunk fetches data from an API, and put it in our state.
*/

const todoSlice = createSlice({
  name: 'todo',

  initialState: {
    data: null,
    isLoading: false,
    isError: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTodo.pending, (state) => {
      state.isLoading = true;
    })

    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      // action.payload = data coming from fetchTodo (API Response)
    })

    builder.addCase(fetchTodo.rejected, (state, action) => {
      console.log(`Error ${action.payload}`);
      state.isLoading = false;
      state.isError = true;
    })
  }
})

export const { data, isLoading, isError } = todoSlice.actions
export default todoSlice.reducer