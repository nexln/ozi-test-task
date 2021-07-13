import {Dispatch} from 'redux'
import {setAppStatusAC} from '../../app/app-reducer'
import {AuthLoginType, authAPI} from "../../api/authAPI";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import {handleServerAppError, handleServerNetworkError} from "../../utils/error-utils";

const initialState = {
  isLoggedIn: false,
}
export const cookies = new Cookies();
const slice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setIsLoggedInAC: (state, action: PayloadAction<{ value: boolean }>) => {
      state.isLoggedIn = action.payload.value
    }
  }
})

export const authReducer = slice.reducer
export const {setIsLoggedInAC} = slice.actions

export const loginTC = (data: AuthLoginType) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC({status: 'loading'}))
  authAPI.login(data)
    .then(res => {
      if (res.data.data) {
        cookies.set('tokenType', res.data.data.tokenType, {path: '/'});
        cookies.set('accessToken', res.data.data.accessToken, {path: '/'});
        dispatch(setIsLoggedInAC({value: true}))
        dispatch(setAppStatusAC({status: 'succeeded'}))
      } else {
        handleServerAppError(res.data, dispatch);
      }
    })
    .catch((error) => {
      handleServerNetworkError(error, dispatch)
    })
}
export const logoutTC = () => (dispatch: Dispatch) => {
  dispatch(setIsLoggedInAC({value: false}))
  cookies.remove('tokenType')
  cookies.remove('accessToken')
}