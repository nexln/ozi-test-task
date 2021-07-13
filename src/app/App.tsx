import React, {useEffect} from 'react';
import './App.css';
import {Login} from "../features/Login/Login";
import {AppRootStateType} from "./store";
import {initializeAppTC, RequestStatusType} from "./app-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Button, CircularProgress} from '@material-ui/core';
import {Redirect, Route, Switch} from 'react-router-dom';
import {AppBar} from '@material-ui/core';
import {IconButton} from '@material-ui/core';
import {Toolbar} from '@material-ui/core';
import {LinearProgress} from '@material-ui/core';
import {Container} from '@material-ui/core';
import {User} from "../features/User/User";
import {logoutTC} from "../features/Login/auth-reducer";
import {ErrorSnackbar} from "../components/ErrorSnackbar/ErrorSnackbar";

export function App() {

  const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)
  const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
  let dispatch = useDispatch()
  const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)


  useEffect(() => {
    dispatch(initializeAppTC())
  }, [dispatch])

  if (!isInitialized) {
    return <div
      style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
      <CircularProgress/>
    </div>
  }

  const logout = () => {
    dispatch(logoutTC())
  }

  return (
    <div className="App">
      <AppBar position="static" color={"primary"}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
          </IconButton>
          {isLoggedIn && <Button color={"inherit"} onClick={logout}>Log out</Button>}
        </Toolbar>
        {status === 'loading' && <LinearProgress color={'secondary'}/>}
      </AppBar>
      <Container fixed>
        <Switch>
          <Route exact path={'/'} render={() => <User/>}/>
          <Route path={'/login'} render={() => <Login/>}/>
          <Route path={'*'} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
          <Redirect from={'*'} to={'/404'}/>
        </Switch>
      </Container>
      <ErrorSnackbar/>
    </div>
  );
}

