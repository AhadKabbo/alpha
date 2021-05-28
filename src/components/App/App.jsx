// import { useEffect } from 'react';
import { ChatProvider } from 'context';
import 'semantic-ui-css/semantic.min.css';
import { useAuth, useResolved } from 'hooks';
import { Login, Signup, Chat } from 'components';
import { Switch, Route } from 'react-router-dom';
import Home from '../../src copy/pages';
import User from "../../src copy/components/authentication/User"
import ForgotPassword from "../../src copy/components/authentication/ForgotPassword"
import VerifyEmail from "../../src copy/components/authentication/VerifyEmail"
import SortGrp from "../../src copy/components/dataSortSection/SortGrp"
// import UpdateProfile from "../../src copy/components/authentication/UpdateProfile"


export const App = () => {
  // const history = useHistory();
  const { authUser, verification } = useAuth();

  // console.log(authUser);
  const authResolved = useResolved(authUser);

  // if (authResolved) {
  //   const verification = authUser.emailVerified;
  //   console.log(verification);
  // }

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

 {   authUser  ?(
      <Route>
        <Switch>
                          {/* Basic page  */}
        <Route path="/" component={Home} exact/>
        <Route path="/user" component={User} />
        <Route path="/newsfeed" component={SortGrp}/>

        <div className="app1">
          <Route path="/chat" component={Chat}  />
          <Route path="/verify-email" component={VerifyEmail} /> 
          </div>

        </Switch>
      </Route>
      ) :(
        <Route>
        <Switch>

          {/* Basic page  */}
          <Route path="/" component={Home} exact/>
        
          <div className="app1">

            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/forgot-password" component={ForgotPassword} /> 
            
            
            </div>
        </Switch>
      </Route>
      )}

    </ChatProvider>
    </>
  );
};
