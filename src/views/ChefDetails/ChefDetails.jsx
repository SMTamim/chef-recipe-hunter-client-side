import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ChefDetails = () => {
  const recipes = useLoaderData();
  const [chef, setChef] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchChef = async () => {
      const res = await fetch(`http://localhost:3000/chefs/${id}`);
      const chefData = await res.json();
      setChef(chefData);
    };
    fetchChef();
  }, []);

  return (
    <div className="px-20 mt-5 lg:px-40">
      <div className="w-full shadow stats">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Likes</div>
          <div className="stat-value text-primary">{chef.likes}</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Recipes</div>
          <div className="stat-value text-secondary">{chef.numberOfRecipes}</div>
          {/* <div className="stat-desc">21% more than last month</div> */}
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={chef.chefPicture} />
              </div>
            </div>
          </div>
          <div className="stat-value">{chef.yearsOfExperience}</div>
          <div className="stat-title">years</div>
          <div className="stat-desc text-secondary">of experience</div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
