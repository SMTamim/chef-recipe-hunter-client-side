import React from 'react';
import Header from '../views/Shared/Header/Header';
import Footer from '../views/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Main;