import React from "react";

import recipeImg1 from "../../assets/images/recepie_1.jpg";

const NewsLetter = () => {
  return (
    <div className="py-20 mb-10 shadow-xl rounded-2xl hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <img src={recipeImg1} className="rounded-lg shadow-2xl " />
        <div>
          <h1 className="text-5xl font-bold">Newsletter!</h1>
          <p className="py-6">
            To receive a brand new recipe everyday in your mail subscribe to our
            newsletter here.
          </p>
          <div className="form-control">
            <label className="input-group input-group-vertical">
              <span className="font-bold">Enter your email</span>
              <input
                type="text"
                placeholder="info@site.com"
                className="input input-bordered"
              />
            </label>
          </div>
          <button className="mt-2 btn btn-primary">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
