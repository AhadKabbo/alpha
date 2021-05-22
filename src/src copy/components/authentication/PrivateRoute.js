import React from "react"
import { Route } from "react-router-dom"
// import { useAuth } from "../../contexts/AuthContext"
import { useAuth } from "../../../hooks"
import { Login} from '../../../components/Login';
import User from "../authentication/User"
import { Container } from "react-bootstrap";

const PrivateRoute = () => { 
  const { authUser } = useAuth();

  return(
 
    <Route>
 {
    authUser ? (
  
          <Route path="/User" component={User} />
  
          )    :  (
  
            
        <Route path="/login" component={Login} />
        
          
  
          )}
  

    </Route>
  )
}

export default PrivateRoute;