import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, TypeRootState} from "./index";

export const useAppDispatch: () => AppDispatch = useDispatch
export const useTypedSelector:TypedUseSelectorHook<TypeRootState> = useSelector