import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from '../data/items.js';


const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      // console.log("reducer",state, action);
      return action.payload;
    },
  },
});
export const itemsActions = itemsSlice.actions;
export default itemsSlice.reducer;
