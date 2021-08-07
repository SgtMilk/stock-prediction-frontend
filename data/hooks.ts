// Copyright © ST-Keys, 2021. All rights reserved. Licence included in the root folder of this repository.

import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { RootState } from ".";

export const selectorHook: TypedUseSelectorHook<RootState> = useSelector;
export { useDispatch as dispatchHook };
