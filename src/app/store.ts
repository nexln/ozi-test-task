import thunk from "redux-thunk";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {appReducer} from "./app-reducer";
import {authReducer} from "../features/Login/auth-reducer";
import {userReducer} from "../features/User/user-reducer";

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  user: userReducer
})
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;