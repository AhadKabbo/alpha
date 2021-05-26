// import { useEffect } from 'react';
import { ChatProvider } from 'context';
import 'semantic-ui-css/semantic.min.css';
import { useAuth } from 'hooks';
import { Login, Signup, Chat } from 'components';
import { Switch, Route } from 'react-router-dom';
import Home from '../../src copy/pages';
import User from '../../src copy/components/authentication/User';
import ForgotPassword from '../../src copy/components/authentication/ForgotPassword';
import SortGrp from '../../src copy/components/dataSortSection/SortGrp';
// import UpdateProfile from "../../src copy/components/authentication/UpdateProfile"

export const ChatResolved = () => {
  // const history = useHistory();
  const { authUser } = useAuth();

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
            {authUser ? (
              <>
                <div className="app1">
                  <Route path="/chat" component={Chat} />
                </div>
              </>
            ) : (
              <div className="app1">
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </div>
            )}
          </Switch>
        </Route>
      </ChatProvider>
    </>
  );
};
