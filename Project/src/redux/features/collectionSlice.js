import { createSlice } from "@reduxjs/toolkit";
import { Bounce, Slide, toast } from 'react-toastify';

const initialState = {
  items: JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
  name: 'collection',

  initialState, // same as innitialState: initialState

  reducers: {
    addCollection: (state, action) => {
      const alreadyExists = state.items.find(
        item => item.id === action.payload.id
      )

      if (!alreadyExists) {
        state.items.push(action.payload)
        localStorage.setItem('collection', JSON.stringify(state.items))
      }
    },

    removeCollection: (state, action) => {
      console.log(action);

      state.items = state.items.filter(
        item => item.id !== action.payload
      )
      localStorage.setItem('collection', JSON.stringify(state.items))
    },

    clearCollection: (state) => {
      console.log("Ho Gya Clear");
      state.items = []
      localStorage.clear()
      console.log(state.items);
      localStorage.getItem('collection')
    },

    addedToast: () => {
      toast.success('Added To Collection', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      })
    },

    removeToast: () => {
      toast.error('Remove From Collection', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      })
    },

    clearToast: () => {
      toast.success('Collection Has Cleared!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    }
  }
})

export const {
  addCollection,
  removeCollection,
  clearCollection,
  addedToast,
  removeToast,
  clearToast
} = collectionSlice.actions

export default collectionSlice.reducer