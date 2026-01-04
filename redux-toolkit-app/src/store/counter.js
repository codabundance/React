import { createSlice } from "@reduxjs/toolkit";

// one slice for counter
const counterSlice = createSlice({
  initialState: { counterVal: 0 },
  name: "counter",
  reducers: {
    increment: (store, action) => {
      store.counterVal++;
    },
    decrement: (store, action) => {
      store.counterVal--;
    },
    add: (store, action) => {
      console.log(action);
      store.counterVal += Number(action.payload);
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
