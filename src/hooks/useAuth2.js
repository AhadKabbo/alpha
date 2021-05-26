import { fb } from 'service';
import { useEffect, useState } from 'react';
import { useAuth } from './useAuth';
import { Button, Row, Col, Card, Container } from 'react-bootstrap';
// Initialized as undefined and set to null if not logged in
// This gives us a way to determine whether or not the hook
// has yet to resolve.

// This is important because we want to be able to distinguish
// between not having yet determined auth state vs determining
// that there is no user currently logged in.

// So that gives us 3 states
// 1. Unresolved
// 2. No user
// 3. User exists

export const useAuth2 = () => {
  const { authUser } = useAuth();
  const [chat, setChatUsers] = useState([]);
  const [create, setcreate] = useState(); // undefined | firebase.User | null

  // useEffect(() => {
  //   const unsubscribe = fb.auth.onAuthStateChanged(user => {
  //     if (user) {
  //       setAuthUser(user);
  //     } else {
  //       setAuthUser(null);
  //     }
  //   });
  //   return unsubscribe;
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const usersCollection = await fb.firestore.collection('chatUsers').get();
      setChatUsers(
        usersCollection.docs.map(doc => ({ ...doc.data(), id: doc.id })),
      );
    };
    fetchData();
  }, []);

  const nameFilter = chat.filter(obj => {
    if (obj.signupUserId === authUser.uid) return obj.userName;
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const Collection = await nameFilter.get();
  //     setcreate(Collection.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  //   };
  //   fetchData();
  // }, []);

  // setcreate(
  //   nameFilter.map(user3 => {
  //     user3.userName;
  //   }),
  // );
  // console.log(create);
  return {
    nameFilter,
  };
};
// {authResolved  ? (

//   ) : (

//   )}
