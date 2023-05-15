import React from "react";

import recepieImg1 from "../../assets/images/recepie_1.jpg";
import recepieImg2 from "../../assets/images/recepie_2.jpg";
import { FaThumbsUp } from "react-icons/fa";

const SingleChef = ({ chef }) => {
  const { chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes } =
    chef;
  return (
    <div className="my-5 shadow-xl card w-96 bg-base-100">
      <figure>
        <img
          style={{ height: "400px", width: "100%" }}
          src={chefPicture}
          alt="Recepie 1"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {chefName}
          <div className="badge badge-secondary">
            {likes} <FaThumbsUp className="ml-2" />
          </div>
        </h2>
        <p>Working as a chef for about <span className="font-bold">{yearsOfExperience}</span> years.</p>
        <div className="w-full card-actions">
          <div className="w-full py-5 badge badge-outline">
            Total Recipes: {numberOfRecipes}
          </div>
        </div>
        <div className="items-center justify-center card-actions">
          <button className="w-full btn btn-primary">View All Recipes</button>
        </div>
      </div>
    </div>
  );
};

export default SingleChef;
