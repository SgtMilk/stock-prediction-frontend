// Copyright © ST-Keys, 2021. All rights reserved. Licence included in the root folder of this repository.

import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { RootState } from "src/data/rootReducer";

export interface File {
  name: string;
}

const fileAdapter = createEntityAdapter<File>();

const fileSlice = createSlice({
  name: "file",
  initialState: fileAdapter.getInitialState(),
  reducers: {
    addFile: fileAdapter.addOne,
  },
});

export const fileReducer = fileSlice.reducer;
export const selectors = {
  ...fileAdapter.getSelectors((state: RootState) => state.files),
};
export const actions = fileSlice.actions;
