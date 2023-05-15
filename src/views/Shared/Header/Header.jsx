import React from "react";
import RightNav from "./RightNav";
import SiteLogo from "../../../Components/SiteLogo/SiteLogo";

const Header = () => {
  return (
    <div className="px-20 mt-5 lg:px-40">
      <div className="flex items-center justify-between pb-5 mb-5 border-b">
        <h4 className="font-extrabold">Find your favorite chefs easily</h4>
        <SiteLogo/>

        <RightNav />
      </div>
    </div>
  );
};

export default Header;
