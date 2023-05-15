import React from 'react';
import SiteLogo from '../../../Components/SiteLogo/SiteLogo';

const Footer = () => {
  return (
    <footer className='px-20 py-20 mt-5 text-white bg-gray-900 rounded-t-3xl lg:px-40'>
      <div className="flex flex-col items-center justify-around">
        <SiteLogo/>
        <p className='mt-10 font-bold'>© 2023 ChefKhujun. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;