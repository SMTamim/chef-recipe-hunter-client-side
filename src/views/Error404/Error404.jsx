import React from 'react';
import img404 from '../../assets/images/404.jpg';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className='relative'>
      <Link to="/" className='absolute grid w-full top-1/2 place-items-center'><button className="btn btn-wide">Go Back</button></Link>
      <img src={img404} style={{width:"100vw", height: "100vh"}} alt="" />
    </div>
  );
};

export default Error404;