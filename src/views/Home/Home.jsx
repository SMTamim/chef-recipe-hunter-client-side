import React from 'react';
import ChefSection from '../../Components/ChefSection/ChefSection';
import Banner from '../../Components/Banners/Banner';

const Home = () => {
  return (
    <div className='px-20 mt-5 lg:px-40'>
      <Banner></Banner>
      <ChefSection/>
    </div>
  );
};

export default Home;