import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/signin" className="nav-link">
          Sign in
        </Link>
        <Link to="/signup" className="highlight-button">
          Sign up
        </Link>
      </nav>
    );
  } else {
    return (
      <nav className="w-full flex justify-between items-center p-4">
        <h1 className=" text-xl text-secondary">Hello {`${user.username}`}</h1>
        <div className="flex items-center">
          <Link to="/" className="nav-link">
            Home
          </Link>
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
