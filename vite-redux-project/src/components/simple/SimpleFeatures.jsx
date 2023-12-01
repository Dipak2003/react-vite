import { createSlice } from "@reduxjs/toolkit";
export const SimpleSlice = createSlice({
  name: "simpleSliceCounter",
  initialState: {
    value: 0,
  },
  reducers: {
    IncrementNumber: (state) => {
      state.value += 1;
    },
    DecrementNumber: (state) => {
      state.value += 1;
    },
    IncrementByNumber: (state, action) => {
      state.value += action.payload;
    },
    DecrementByNumber: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const {IncrementNumber,DecrementNumber,IncrementByNumber,DecrementByNumber} = SimpleSlice.actions
export default SimpleSlice.reducer