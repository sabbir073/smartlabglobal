import { combineReducers } from "@reduxjs/toolkit";
import loaderReducer from "./slices/loaderSlice";
import toastReducer from "./slices/toastSlice";
import navigationReducer from "./slices/navigationSlice";
const RootReducer = combineReducers({
  loader: loaderReducer,
  toast: toastReducer,
  navigation: navigationReducer,
})

export default RootReducer;