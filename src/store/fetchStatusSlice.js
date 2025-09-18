import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone :false,
    currentlyFetching: false,
  },
  reducers : {
    markFetchDone: (state) => {
       state.fetchDone = true;
    },
    markFetchStart: (state) => {
       state.currentlyFetching = true;
    },
    markFetchFinish: (state) => {
       state.currentlyFetching = false;
    },
  },
});
export const  fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice.reducer;
