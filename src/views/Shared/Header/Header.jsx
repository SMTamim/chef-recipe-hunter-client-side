import React from "react";
import siteLogo from "../../../assets/images/logo-dark.png";
import { Link } from "react-router-dom";
import RightNav from "./RightNav";

const Header = () => {
  return (
    <div className="px-20 mt-5 lg:px-40">
      <div className="flex items-center justify-between pb-5 mb-5 border-b">
        <Link to="/">
          <div className="flex items-center justify-center logo">
            <img src={siteLogo} alt="" className="block mr-2" />
            <span className="text-xl font-bold">
              Chef <br /> Khujun
            </span>
          </div>
        </Link>

        <RightNav/>
      </div>
    </div>
  );
};

export default Header;
