import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../rootReducer";

export interface Status {
  context: {};
  selection: {};
}

const statusSlice = createSlice({
  name: "status",
  initialState: { context: {}, selection: {} } as Status,
  reducers: {
    setContext: (state, action) => {
      state.context = action.payload;
    },
    setSelection: (state, action) => {
      state.selection = action.payload;
    },
  },
});

export const statusReducer = statusSlice.reducer;
export const selectors = {
  getContext: (state: RootState) => state.status.context,
  getSelection: (state: RootState) => state.status.selection,
};
export const actions = statusSlice.actions;
