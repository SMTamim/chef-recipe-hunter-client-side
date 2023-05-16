import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
  const {user, loaded} = useContext(AuthContext);
  
  if(!loaded) return <Loading/>;
  if(user) return children;
  
  return <Navigate to='/login'/>
};

export default PrivateRoutes;