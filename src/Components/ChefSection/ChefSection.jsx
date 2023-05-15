import React from 'react';
import SingleChef from '../SingleChef/SingleChef';

const ChefSection = () => {
  return (
    <div className="flex flex-col w-full my-5">
      <h3 className='w-full mb-10 text-4xl font-extrabold text-center'>Our Popular Chefs</h3>
      <div className="grid gap-2 place-items-center md:grid-cols-2 lg:grid-cols-3">
        <SingleChef></SingleChef>
        <SingleChef></SingleChef>
        <SingleChef></SingleChef>
        <SingleChef></SingleChef>
        <SingleChef></SingleChef>
        <SingleChef></SingleChef>
      </div>
    </div>
  );
};

export default ChefSection;