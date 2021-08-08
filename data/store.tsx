import { configureStore } from "@reduxjs/toolkit";
import rootReducer, { RootState } from "./rootReducer";
import { Story } from "@storybook/react";
import { Provider } from "react-redux";

export const createStore = (initialState: RootState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
};

export const createEmptyStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const StorybookDecorator = (Story: Story) => (
  <Provider store={createEmptyStore()}>
    <Story />
  </Provider>
);
