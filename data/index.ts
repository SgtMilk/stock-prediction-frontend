// Copyright © ST-Keys, 2021. All rights reserved. Licence included in the root folder of this repository.

export * as File from "./slices/fileSlice/fileSlice";
export * as Status from "./slices/statusSlice/statusSlice";

export type { RootState } from "./rootReducer";
export { createStore } from "./store";
export * as Hooks from "./hooks";
