import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
  }

  function resetPass(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function Logout() {
    signOut(auth);
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  return <AuthContext.Provider value={{ signUp, logIn, Logout, resetPass, user }}>{children}</AuthContext.Provider>;
}

export function UserAuth() {
  return useContext(AuthContext);
}
