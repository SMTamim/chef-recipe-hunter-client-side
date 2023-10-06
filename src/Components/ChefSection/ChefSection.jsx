import React, { useEffect, useState } from 'react';
import SingleChef from '../SingleChef/SingleChef';
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

const ChefSection = () => {

  const [chefs, setChefs] = useState([]);
  useEffect(()=>{
    fetch(`${API_ENDPOINT}/chefs`)
    .then(res=>res.json())
    .then(data=> setChefs(data))
    .catch((err)=>{
      console.log(err);
    })
  }, [])

  return (
    <div className="flex flex-col w-full my-5">
      <h3 className='w-full mb-10 text-4xl font-extrabold text-center text-gray-300'>Our Popular Chefs</h3>
      <div className="flex flex-wrap items-center justify-center ">
        {
          chefs.map(chef=> <SingleChef
            key={chef.id}
            chef={chef}
          />)
        }
      </div>
    </div>
  );
};

export default ChefSection;