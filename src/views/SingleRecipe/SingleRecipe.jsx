import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleRecipe = ({ recipe }) => {
  const [rating, setRating] = useState(recipe.rating);
  const [isDisabled, setIsDisabled] = useState(false);

  const addToFav = () => {
    toast("Added to favorite!");
    setIsDisabled(true);
  };

  return (
    <div className="mt-10 text-gray-100 bg-gray-900 shadow-xl md:mr-7 card w-80">
      <figure >
        <img
          style={{maxHeight: "200px", minHeight: '200px', width: "100%"}}
          src={`${import.meta.env.VITE_API_ENDPOINT}/image/${recipe.recipeImage}`}
          alt={recipe.recipe_name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {recipe.recipe_name}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <h4 className="mb-5">
          Cooking Method:{" "}
          <span className="capitalize">{recipe.cooking_method}</span>
        </h4>
        <div className="justify-end">
          <span className="text-xl">Ingredients:</span>
          <br />
          {recipe.ingredients.map((ingredient, idx) => (
            <div key={ingredient + idx} className="badge badge-outline">
              {ingredient}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <Rating
            style={{ maxWidth: 180 }}
            value={rating}
            transition="zoom"
            readOnly
          />
          <div lassName="text-orange-600 ">
            {isDisabled ? (
              <AiFillHeart className="text-3xl pointer-events-none" />
            ) : (
              <AiOutlineHeart
                onClick={addToFav}
                className="text-3xl cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingleRecipe;
