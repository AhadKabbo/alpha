import { fb } from 'service';
import { useEffect, useState } from 'react';

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

export const useAuth = () => {
  const [authUser, setAuthUser] = useState(); // undefined | firebase.User | null

  function signup(email, password) {
    return fb.auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return fb.auth.signInWithEmailAndPassword(email, password);
  }

  function resetPassword(email) {
    return fb.auth.sendPasswordResetEmail(email);
  }

  function updatePassword(password) {
    return authUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = fb.auth.onAuthStateChanged(user => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return unsubscribe;
  }, []);

  return {
    resetPassword,
    authUser,
    login,
    signup,
    updatePassword,
  };
};
