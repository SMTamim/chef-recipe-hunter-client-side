import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../views/Loading/Loading';

const PrivateRoutes = ({children}) => {
  const {user, loaded} = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  
  if(!loaded) return <Loading/>;
  if(user) return children;
  
  return <Navigate state={{from: location}} replace={true} to='/login'/>
};

export default PrivateRoutes;