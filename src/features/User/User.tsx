import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {Redirect} from "react-router-dom";
import {fetchUserDataTC} from "./user-reducer";

export const User = () => {

  const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
  const userName = useSelector<AppRootStateType, string>(state => state.user.name)
  const userId = useSelector<AppRootStateType, number>(state => state.user.id)
  const userEmail = useSelector<AppRootStateType, string>(state => state.user.email)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isLoggedIn) {
      return
    }
    dispatch(fetchUserDataTC())
  }, [isLoggedIn, dispatch])

  if (!isLoggedIn) {
    return <Redirect to={"/login"}/>
  }

  return (
    <div>
<p>{userName}</p>
<p>{userId}</p>
<p>{userEmail}</p>
    </div>
  );
}
