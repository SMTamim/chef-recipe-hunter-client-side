import React from "react";
import SingleRecipe from "../SingleRecipe/SingleRecipe";

const Recipes = ({ recipes }) => {

  console.log(recipes);
  return (
    <div className="">
      <h2 className="my-8 text-5xl font-extrabold text-center text-white">
        Recipes of this chef:
      </h2>
      <div className="flex flex-wrap items-center justify-center w-full">
        {
          recipes.map(recipe=> <SingleRecipe key={recipe.id} recipe={recipe}/>)
        }
      </div>
    </div>
  );
};

export default Recipes;
