import axios from "axios";
import {cookies} from "../features/Login/auth-reducer";

const settings = {
  withCredentials: true,
}

export const instance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://tager.dev.ozitag.com/api',
  ...settings
})

export type ResData = {
  tokenType: string
  expiresAt: string
  accessToken: string
  refreshToken: number
}

export type MineData = {
  id: number
  name: string,
  email: string
}

export type AuthLoginType = {
  email: string,
  password: string,
}

export type ResponseType<D = {}> = {
  message: string
  data: D
}

export const authAPI = {
  login(data: AuthLoginType) {
    return instance.post<ResponseType<ResData>>('/auth/user', data)
  },
  me() {
    return instance.get<ResponseType<MineData>>('/tager/user/profile', {
      headers: {
        'Authorization': `${cookies.get('tokenType')} ${cookies.get('accessToken')}`
      }
    })
  }
}