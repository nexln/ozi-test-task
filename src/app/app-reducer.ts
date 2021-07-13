import {setIsLoggedInAC} from "../features/Login/auth-reducer";
import {authAPI} from "../api/authAPI";
import {Dispatch} from "redux";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppRootStateType} from "./store";
import {handleServerAppError, handleServerNetworkError} from "../utils/error-utils";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  isInitialized: false as boolean,
  error: null as null | string,
}

const slice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    setAppStatusAC: (state, action: PayloadAction<{ status: RequestStatusType }>) => {
      state.status = action.payload.status
    },
    setIsInitializedAC: (state, action: PayloadAction<{ isInitialized: boolean }>) => {
      state.isInitialized = action.payload.isInitialized
    },
    setAppErrorAC: (state, action: PayloadAction<{ error: string | null }>) => {
      state.error = action.payload.error
    },
  }
})

export const appReducer = slice.reducer
export const {setAppStatusAC} = slice.actions
export const {setAppErrorAC} = slice.actions
export const {setIsInitializedAC} = slice.actions


export const initializeAppTC = () => (dispatch: Dispatch, getState: () => AppRootStateType) => {
  // const token = getState().auth.token
  // const tokenType = getState().auth.tokenType
  authAPI.me(/*token, tokenType*/)
    .then(res => {
      if (res.data.data) {
        dispatch(setIsInitializedAC({isInitialized: true}))
        dispatch(setIsLoggedInAC({value: true}))
        dispatch(setAppStatusAC({status: 'succeeded'}))
    } else {
    handleServerAppError(res.data, dispatch);
  }
    })
    .catch((error) => {
      handleServerNetworkError(error, dispatch)
    })
    .finally(() => {
      dispatch(setIsInitializedAC({isInitialized: true}))
    })
}
