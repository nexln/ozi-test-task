import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Dispatch} from "redux";
import {setAppStatusAC} from "../../app/app-reducer";
import {authAPI} from "../../api/authAPI";
import {handleServerAppError, handleServerNetworkError} from "../../utils/error-utils";

export type UserStateType = {
  id: number,
  email: string,
  name: string
}

const initialState: UserStateType = {
  id: 1,
  email: '',
  name: ''
}

const slice = createSlice({
  name: 'todolist',
  initialState: initialState,
  reducers: {
    setUserDataAC: (state, action: PayloadAction<UserStateType>) => {
      state.id = action.payload.id
      state.email = action.payload.email
      state.name = action.payload.name
    },
  }
})

export const userReducer = slice.reducer
export const {setUserDataAC} = slice.actions

export const fetchUserDataTC = () => {
  return (dispatch: Dispatch) => {
    dispatch(setAppStatusAC({status: 'loading'}))
    authAPI.me()
      .then((res) => {
        if (res.data.data) {
        dispatch(setAppStatusAC({status: 'succeeded'}))
        dispatch(setUserDataAC({email: res.data.data.email, name: res.data.data.name, id: res.data.data.id}))
      } else {
      handleServerAppError(res.data, dispatch);
    }
      })
      .catch(error => {
        handleServerNetworkError(error, dispatch)
      })
  }
}