import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";

const RightNav = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex items-center justify-center">
      <Link to="/" className="mr-4 link link-info">
        Home
      </Link>
      <Link to="/blog" className="mr-4 link link-info">
        Blog
      </Link>
      {user ? (
        <Link to="/profile" className="block">
          <div className="tooltip tooltip-primary" data-tip={user.displayName}>
            <div className="avatar">
              <div className="w-8 rounded">
              {user.photoURL? <img src={user.photoURL} alt={user.displayName} />: <FaUserTie/> }
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <Link to="/login" className="mr-4 link link-info">
          Login
        </Link>
      )}
    </div>
  );
};

export default RightNav;
