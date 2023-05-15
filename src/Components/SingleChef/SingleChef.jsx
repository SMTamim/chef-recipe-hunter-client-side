import React from "react";

import recepieImg1 from '../../assets/images/recepie_1.jpg'
import recepieImg2 from '../../assets/images/recepie_2.jpg'

const SingleChef = () => {
  return (
    <div className="my-5 shadow-xl card w-96 bg-base-100">
      <figure>
        <img
          src={recepieImg1}
          alt="Recepie 1"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="justify-end card-actions">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default SingleChef;
