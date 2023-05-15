import React from 'react';
import ChefSection from '../../Components/ChefSection/ChefSection';
import Banner from '../../Components/Banners/Banner';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';
import OurPicks from '../../Components/OurPicks/OurPicks';

const Home = () => {
  return (
    <div className='px-20 mt-5 lg:px-40'>
      <Banner></Banner>
      <ChefSection/>
      <OurPicks/>
      <NewsLetter/>
    </div>
  );
};

export default Home;