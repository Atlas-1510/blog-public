import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";

function Header({ clearValue }) {
  const user = useContext(UserContext);

  const handleSignOut = (e) => {
    e.preventDefault();
    clearValue();
  };

  if (!user) {
    return (
      <nav className="w-full flex justify-end p-4">
        <NavLink
          end
          to="/articles"
          className={({ isActive }) =>
            isActive ? "active-nav-link" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink to="/signin" className="nav-link">
          Sign in
        </NavLink>
        <NavLink to="/signup" className="highlight-button">
          Sign up
        </NavLink>
      </nav>
    );
  } else {
    return (
      <nav className="w-full flex justify-between items-center p-4">
        <div className="flex items-center">
          <img
            src={user.profileImage}
            alt="user profile"
            className=" border-0 rounded-full w-14 h-14 mt-2"
          />
          <h1 className="ml-4 text-xl text-secondary">
            Hello {`${user.username}`}
          </h1>
        </div>
        <div className="flex items-center">
          <NavLink
            end
            to="/articles"
            className={({ isActive }) =>
              isActive ? "active-nav-link" : "nav-link"
            }
          >
            Home
          </NavLink>
          <button
            onClick={(e) => handleSignOut(e)}
            className="nav-link bg-highlight text-white hover:text-white hover:bg-indigo-700"
          >
            Sign Out
          </button>
        </div>
      </nav>
    );
  }
}

export default Header;
