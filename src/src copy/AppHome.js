import './App.css';
import React from "react"
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';


import { AuthProvider } from "./contexts/AuthContext"
import UpdateProfile from "./components/authentication/UpdateProfile"
// import Profile from "./components/UserProfile/Profile"
import PrivateRoute from "./components/authentication/PrivateRoute"

import Signup from "./components/authentication/Signup"
import Login from "./components/authentication/Login"
import ForgotPassword from "./components/authentication/ForgotPassword"
import User from "./components/authentication/User"

function AppHome() {
  return (
    <Router>
      <AuthProvider>
      <Switch>
        {/* Home */}
        <Route path="/" component={Home} exact/>

        {/* {/* Profile or User */}
        <PrivateRoute path="/User" component={User} />
        <PrivateRoute path="/update-profile" component={UpdateProfile} />


        {/* Auth */}
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} /> 




        <Route path="/Login" component={SigninPage} />
      </Switch>
      </AuthProvider>
    </Router>
  );
}

export default AppHome;
