import React from "react";

import recipeImg1 from "../../assets/images/recepie_1.jpg";

const NewsLetter = () => {
  return (
    <div className="py-20 mb-10 text-gray-300 bg-gray-800 shadow-xl rounded-2xl hero">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <img src={recipeImg1} className="rounded-lg shadow-2xl " />
        <div>
          <h1 className="text-5xl font-bold">Newsletter!</h1>
          <p className="py-6">
            To receive a brand new recipe everyday in your mail subscribe to our
            newsletter here.
          </p>
          <div className="form-control">
            <input
                type="text"
                placeholder="Enter your e-mail"
                className="input input-bordered"
              />
          </div>
          <button className="p-2 mt-2 btn btn-secondary">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
