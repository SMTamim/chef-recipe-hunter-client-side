import React from "react";
import siteLogo from "../../assets/images/logo-dark.png";
import { Link } from "react-router-dom";

const SiteLogo = () => {
  return (
    <Link className="" to="/">
      <div className="flex items-center justify-center">
        <span className="block text-xl font-bold">Chef</span>
        <img src={siteLogo} alt="" className="block mx-2" />
        <span className="text-xl font-bold">Khujun</span>
      </div>
    </Link>
  );
};

export default SiteLogo;
