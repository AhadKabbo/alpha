// import { useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import { fb } from '../../service';
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
import AdminPage from "../../src copy/components/Admin/AdminPage"


export const AppCopy = () => {
  // const history = useHistory();
  const { authUser } = useAuth();
  const [cr, setcreate] = useState(); 
  const [usersP, setUsers] = React.useState([]);
  const authResolved = useResolved(authUser);

  // // If the user is logged in it will prevent the
  // // user from seeing the login/signup screens
  // // by always redirecting to chat on auth change.

  // useEffect(() => {
  //   if (authResolved) {
  //     history.push(!!authUser ? '/' : '/login');
      
  //   }
  // }, [authResolved, authUser, history]);
  // if (authResolved=== true) 
  // authUser == 'kA3BGIqqDwMJJXXwToFByomtz0r1'; 
  //   console.log(authUser);
  // ;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const usersCollection = await fb.firestore
  //       .collection('users')
  //       .orderBy('createdAt', 'desc')
  //       .get();
  //     setUsers(
  //       usersCollection.docs.map(doc => ({ ...doc.data(), id: doc.id })),
  //     );
  //   };
  //   fetchData();
  // }, []);

  // const personalUser = usersP.filter(obj => {
  //   return obj.userId === 'kA3BGIqqDwMJJXXwToFByomtz0r1';
  // });

  // console.log(personalUser.map.userId);

  // {personalUser.map(user => ((user.userId) ))}
  // if (personalUser.map.userId === 'kA3BGIqqDwMJJXXwToFByomtz0r1'){

  //   if (authResolved === true){
  //     const create =  authUser.uid;
  //     console.log(create);
  //     // if (create === "kA3BGIqqDwMJJXXwToFByomtz0r1")
  //     // return setcreate = true;
  //     // // console.log(create);
  //     // console.log(cr);
  // }
  
  // console.log(create);
  // console.log(authUser.uid);
  return authResolved  ? (
    <>
    <ChatProvider authUser={authUser}>
    {   authUser.uid === "cgdc16wzSkeLMWPSL200GOvGmqp1"  ?(
      <Route>
        <Switch>
        
        <Route path="/admin" component={AdminPage}/>
        
        </Switch>
      </Route>
    ):(<Route>
      <Switch>
      
      <Route path="/user" component={User} />
      </Switch>
    </Route>
    )}

    {/* <ChatProvider authUser={authUser}>
    { (personalUser.map(user => ((user.userId==='kA3BGIqqDwMJJXXwToFByomtz0r1' ) )))?(
      <Route>
        <Switch>
        <Route path="/admin" component={AdminPage}/>
        </Switch>
      </Route>
      ) :(
        <Route>
        <Switch>
        <Route path="/" component={Home} />
        </Switch>
      </Route>
      )}
    </ChatProvider> */}
    </ChatProvider>
    </>

) : (
  <>Loading...</>
);
 };

//  else {
//   return (
//     <>
//       <Route>
//         <Switch>
//         {personalUser.map(user => (
          
//         <Route path="/" component={Home} />
//         ))}
//         </Switch>
//       </Route>

//     {/* <ChatProvider authUser={authUser}>
//     { (personalUser.map(user => ((user.userId==='kA3BGIqqDwMJJXXwToFByomtz0r1' ) )))?(
//       <Route>
//         <Switch>
//         <Route path="/admin" component={AdminPage}/>
//         </Switch>
//       </Route>
//       ) :(
//         <Route>
//         <Switch>
//         <Route path="/" component={Home} />
//         </Switch>
//       </Route>
//       )}
//     </ChatProvider> */}
//     </>
//   );
//  }


// };
