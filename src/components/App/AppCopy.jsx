// import { useEffect } from 'react';
import { ChatProvider } from 'context';
import 'semantic-ui-css/semantic.min.css';
import { useAuth } from 'hooks';
import { Login, Signup, Chat } from 'components';
import { Switch, Route } from 'react-router-dom';
import Home from '../../src copy/pages';
import User from "../../src copy/components/authentication/User"
import ForgotPassword from "../../src copy/components/authentication/ForgotPassword"
import VerifyEmail from "../../src copy/components/authentication/VerifyEmail"
import SortGrp from "../../src copy/components/dataSortSection/SortGrp"
// import UpdateProfile from "../../src copy/components/authentication/UpdateProfile"


export const AppCopy = () => {
  // const history = useHistory();
  const { authUser } = useAuth();
  // console.log(authUser);
  // const authResolved = useResolved(authUser);

  // // If the user is logged in it will prevent the
  // // user from seeing the login/signup screens
  // // by always redirecting to chat on auth change.

  // useEffect(() => {
  //   if (authResolved) {
  //     history.push(!!authUser ? '/' : '/login');
      
  //   }
  // }, [authResolved, authUser, history]);


  
  return (
    <>
    <ChatProvider authUser={authUser}>
      <Route>
        <Switch>
        <Route path="/" component={Home} exact/>
        


        {
          authUser ? (
        <>
        <div className="app2">
          <Route path="/user" component={User} />
          <Route path="/newsfeed" component={SortGrp}/>
          </div>
          <div className="app1">
          <Route path="/chat" component={Chat}  />
          </div>
          
         </>
          ) : (
            <div className="app1">
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/forgot-password" component={ForgotPassword} /> 
            
            <Route path="/verify-email" component={VerifyEmail} /> 


            </div>
          )}

<>

        <div className="app1">
          <Route path="/chat" component={Chat}  />
          </div>
          









</>
        </Switch>
        </Route>
    </ChatProvider>
    </>
  );
};
