import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const githubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  const handleGithubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = ()=>{
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, loggedUser=>{
      console.log(loggedUser);
      setUser(loggedUser);
    });
    
    return ()=>{
      return unsubscribe();
    }
  }, []);

  const authInfo = {
    user,
    handleGithubSignIn,
    handleGoogleSignIn,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
