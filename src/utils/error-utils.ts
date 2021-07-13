import {setAppErrorAC, setAppStatusAC} from '../app/app-reducer';
import {Dispatch} from 'redux';
import {ResponseType} from "../api/authAPI";


export type ErrorType = {
  response: {
    data: {
      message: string
    }
  }
}


export const handleServerAppError = (data: ResponseType, dispatch: Dispatch) => {
  if (data.message.length) {
    dispatch(setAppErrorAC({error: data.message}))
  } else {
    dispatch(setAppErrorAC({error: 'Some error occurred'}))
  }
  dispatch(setAppStatusAC({status: 'failed'}))
}

export const handleServerNetworkError = (error: ErrorType , dispatch: Dispatch) => {
  dispatch(setAppErrorAC({error: error.response.data.message}))
  dispatch(setAppStatusAC({status: 'failed'}))
}

// type ErrorUtilsDispatchType = Dispatch<SetAppErrorActionType | SetAppStatusActionType>