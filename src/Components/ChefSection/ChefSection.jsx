import React, { useEffect, useState } from 'react';
import SingleChef from '../SingleChef/SingleChef';

const ChefSection = () => {

  const [chefs, setChefs] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/chefs')
    .then(res=>res.json())
    .then(data=> setChefs(data))
    .catch((err)=>{
      console.log(err);
    })
  }, [])

  return (
    <div className="flex flex-col w-full my-5">
      <h3 className='w-full mb-10 text-4xl font-extrabold text-center text-gray-300'>Our Popular Chefs</h3>
      <div className="grid gap-2 place-items-center md:grid-cols-2 lg:grid-cols-3">
        {
          chefs.slice(0, 6).map(chef=> <SingleChef
            key={chef.id}
            chef={chef}
          />)
        }
      </div>
    </div>
  );
};

export default ChefSection;