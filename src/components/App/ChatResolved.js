import { ChatProvider } from 'context';
import 'semantic-ui-css/semantic.min.css';
import { useAuth } from 'hooks';
import { Login, Signup, Chat } from 'components';
import { Switch, Route } from 'react-router-dom';

import ForgotPassword from '../../src copy/components/authentication/ForgotPassword';

export const ChatResolved = () => {
  const { authUser } = useAuth();

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
