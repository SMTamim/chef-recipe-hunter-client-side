import React from "react";
import recipeImg2 from "../../assets/images/recepie_2.jpg";

const OurPicks = () => {
  return (
    <div className="flex flex-col mt-10 mb-20">
      <h2 className="mb-5 text-4xl font-bold text-center">Our Favorite Recipes from popular chefs </h2>
      <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-2">
      <div className="shadow-xl card w-96 bg-base-100 image-full">
        <figure>
          <img
            src={recipeImg2}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Recipe</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="shadow-xl card w-96 bg-base-100 image-full">
        <figure>
          <img
            src={recipeImg2}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Recipe</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="shadow-xl card w-96 bg-base-100 image-full">
        <figure>
          <img
            src={recipeImg2}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Recipe</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="shadow-xl card w-96 bg-base-100 image-full">
        <figure>
          <img
            src={recipeImg2}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Recipe</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OurPicks;
