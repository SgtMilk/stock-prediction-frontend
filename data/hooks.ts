import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { RootState } from ".";

export const selectorHook: TypedUseSelectorHook<RootState> = useSelector;
export { useDispatch as dispatchHook };
