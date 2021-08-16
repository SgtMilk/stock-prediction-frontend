import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../rootReducer";

export interface Status {
  selectedPortfolio: string;
}

const statusSlice = createSlice({
  name: "status",
  initialState: { selectedPortfolio: "" } as Status,
  reducers: {
    setSelectedPorfolio: (state, action) => {
      state.selectedPortfolio = action.payload;
    },
  },
});

export const statusReducer = statusSlice.reducer;
export const selectors = {
  getSelectedPortfolio: (state: RootState) => state.status.selectedPortfolio,
};
export const actions = statusSlice.actions;
