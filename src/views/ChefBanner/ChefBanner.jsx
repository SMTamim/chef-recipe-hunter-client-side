import React from "react";
import { FaThumbsUp, FaList } from "react-icons/fa";

const ChefBanner = ({ chef }) => {
  return (
    <div className="w-full text-gray-100 bg-gray-900 shadow stats">
      <div className="grid stat place-items-center">
        <div className="flex stat-value text-primary">
          {chef.likes} <FaThumbsUp className="ml-5" />
        </div>
      </div>

      <div className="grid border-gray-200 stat place-items-center">
        <div className="stat-value text-secondary">
          {chef.numberOfRecipes} <span className="text-gray-200">Recipes</span>
        </div>
        {/* <div className="stat-desc">21% more than last month</div> */}
      </div>

      <div className="justify-between border-gray-200 stat">
        <div className="stat-figure text-secondary">
          <div className="avatar">
            <div className="rounded-full w-80">
              <img src={chef.chefPicture} />
            </div>
          </div>
        </div>
        <div className="stat-value">
          {chef.yearsOfExperience} <span className="text-orange-400">years</span>{" "}
          <br /> <div className="stat-desc text-secondary">of experience</div>{" "}
        </div>
        <div className="flex flex-col mt-2">
          <h2 className="text-5xl font-bold">{chef.chefName}</h2>
          <h4 className="mb-2 font-bold mt-14">About {chef.chefName}:</h4>
          <p className="pl-5 text-justify">{chef.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;
