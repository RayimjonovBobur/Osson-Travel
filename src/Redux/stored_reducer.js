import { createSlice } from "@reduxjs/toolkit";

export const allData = createSlice({
  name: "Admin panel",
  initialState: {
    values: [{ name: "BoburDev", age: 17 }],
    active: 0,
    currentPage: {},
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    product: [],
    challageData: {},
  },
  reducers: {
    setValues: (state, { payload }) => {
      state.values = payload;
    },
    setActive: (state, { payload }) => {
      state.active = payload;
    },
    setCurrenPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    setChallage: (state, { payload }) => {
      state.challageData = payload;
    },
  },
});

export const { setValues, setActive, setCurrenPage, setChallage } =
  allData.actions;

export default allData.reducer;
