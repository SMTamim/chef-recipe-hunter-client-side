import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const githubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const updateUser = (newData) =>{
    updateProfile(auth.currentUser, newData);
  }

  const signInUser = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password);
  }

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
      setLoaded(true);
    });
    
    return ()=>{
      return unsubscribe();
    }
  }, []);

  const authInfo = {
    user,
    loaded,
    createUser,
    handleGithubSignIn,
    handleGoogleSignIn,
    logOut,
    updateUser,
    signInUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
