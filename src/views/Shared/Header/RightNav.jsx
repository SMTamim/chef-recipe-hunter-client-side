import React from "react";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";

const RightNav = () => {
  return (
    <div className="flex items-center justify-center">
      <Link to="/" className="mr-4 link link-info">
        Home
      </Link>
      <Link to="/blog" className="mr-4 link link-info">
        Blog
      </Link>
      <Link to="/profile">
        <FaUserTie
          style={{ height: "40px" }}
          className="rounded-lg"
        ></FaUserTie>
      </Link>
    </div>
  );
};

export default RightNav;
