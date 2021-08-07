// Copyright © ST-Keys, 2021. All rights reserved. Licence included in the root folder of this repository.

import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { RootState } from "src/data/rootReducer";

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
