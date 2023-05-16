import React, { createContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const githubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  
  const handleGithubSignIn = ()=>{
    return signInWithPopup(auth, githubProvider);
  }

  const handleGoogleSignIn = ()=>{
    return signInWithPopup(auth, googleProvider);
  }

  const authInfo = {
    user,
    handleGithubSignIn,
    handleGoogleSignIn
  }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;