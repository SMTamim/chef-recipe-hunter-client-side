import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";

const RightNav = () => {
  const { user, logOut, loaded } = useContext(AuthContext);
  return (
    <div className="flex items-center justify-center">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "mr-4 link link-info"
            : isActive
            ? "mr-4 link link-secondary"
            : "mr-4 link link-info"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive, isPending }) =>
          isPending
            ? "mr-4 link link-info"
            : isActive
            ? "mr-4 link link-secondary"
            : "mr-4 link link-info"
        }
      >
        Blog
      </NavLink>
      {user ? (
        <>
          <NavLink to="/#" className="block mr-4">
            <div
              className="tooltip tooltip-primary"
              data-tip={user.displayName}
            >
              <div className="avatar">
                <div className="w-8 rounded">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName} />
                  ) : (
                    <FaUserTie />
                  )}
                </div>
              </div>
            </div>
          </NavLink>
          <button
            className="link link-info"
            onClick={() => {
              logOut().then(()=>{
                localStorage.removeItem('access_token');
              });
            }}
          >
            Logout
          </button>
        </>
      ) : loaded ? (
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
          isPending
            ? "mr-4 link link-info"
            : isActive
            ? "mr-4 link link-secondary"
            : "mr-4 link link-info"
        }
        >
          Login
        </NavLink>
      ) : (
        ""
      )}
    </div>
  );
};

export default RightNav;
