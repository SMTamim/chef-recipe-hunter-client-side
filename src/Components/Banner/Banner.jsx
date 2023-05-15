import React from "react";

import foodImg from '../../assets/images/food1.jpg';

const Banner = () => {
  return (
    <div className="px-20 mt-5 lg:px-40">
      <div className="w-full rounded-lg carousel">
        <div id="item1" className="w-full carousel-item">
          <img
            src={foodImg}
            className="w-full"
          />
        </div>
        <div id="item2" className="w-full carousel-item">
          <img
            src={foodImg}
            className="w-full"
          />
        </div>
        <div id="item3" className="w-full carousel-item">
          <img
            src={foodImg}
            className="w-full"
          />
        </div>
        <div id="item4" className="w-full carousel-item">
          <img
            src={foodImg}
            className="w-full"
          />
        </div>
      </div>
      
      <div className="flex justify-center w-full gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
