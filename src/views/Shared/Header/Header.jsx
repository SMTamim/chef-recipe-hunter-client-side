import React from "react";
import RightNav from "./RightNav";
import SiteLogo from "../../../Components/SiteLogo/SiteLogo";

const Header = () => {
  return (
    <div className="text-white bg-gray-800 rounded-b-3xl">
      <div className="flex items-center justify-between px-20 py-20  lg:px-40">
        <h4 className="font-extrabold">Find your favorite chefs easily</h4>
        <SiteLogo />
        <RightNav />
      </div>
    </div>
  );
};

export default Header;
