import { ChatProvider } from 'context';
import 'semantic-ui-css/semantic.min.css';
import { useAuth } from 'hooks';
import { Login, Signup, Chat } from 'components';
import { Switch, Route } from 'react-router-dom';
import Home from '../../src copy/pages';
import User from '../../src copy/components/authentication/User';
import ForgotPassword from '../../src copy/components/authentication/ForgotPassword';
import VerifyEmail from '../../src copy/components/authentication/VerifyEmail';
import SortGrp from '../../src copy/components/dataSortSection/SortGrp';
import AdminPage from '../../src copy/components/Admin/AdminPage';
import UnderDevlopment from 'src copy/components/UnderDevlopment';
import ReportPage from 'src copy/components/report handle/ReportPage';
import SuccessStoryPage from 'src copy/components/succsess-Story/SuccessStoryPage';
import AboutMeInfo from 'src copy/components/Info/AboutMeInfo';

export const App = () => {
  const { authUser } = useAuth();
  // const authResolved = useResolved(authUser);

  return (
    <>
      <ChatProvider authUser={authUser}>
        {authUser ? (
          <Route>
            <Switch>
              {/* Basic page  */}
              <Route path="/" component={Home} exact />
              <Route path="/under-devlopment" component={UnderDevlopment} />
              <Route path="/user" component={User} />
              <Route path="/report-problem" component={ReportPage} />
              <Route path="/success-story" component={SuccessStoryPage} />
              <Route path="/newsfeed" component={SortGrp} />
              <Route path="/admin" component={AdminPage} />
              <Route path="/about-me" component={AboutMeInfo} />

              <div className="app1">
                <Route path="/chat" component={Chat} />
                <Route path="/verify-email" component={VerifyEmail} />
              </div>
            </Switch>
          </Route>
        ) : (
          <Route>
            <Switch>
              {/* Basic page  */}
              <Route path="/" component={Home} exact />
              <Route path="/under-devlopment" component={UnderDevlopment} />
              <Route path="/about-me" component={AboutMeInfo} />
              <Route path="/report-problem" component={ReportPage} />
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
