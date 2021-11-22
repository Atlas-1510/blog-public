import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";
import useLocalStorage from "../../hooks/useLocalStorage";

function Header() {
  const user = useContext(UserContext);
  const { clearValue } = useLocalStorage("jwt");

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
        <Link
          to="/signup"
          className="nav-link bg-highlight text-white hover:text-white hover:bg-indigo-700"
        >
          Sign up
        </Link>
      </nav>
    );
  } else {
    return (
      <nav className="w-full flex justify-between items-center p-4">
        <h1 className=" text-lg text-secondary">Hello {`${user.username}`}</h1>
        <button
          onClick={(e) => handleSignOut(e)}
          className="nav-link bg-highlight text-white hover:text-white hover:bg-indigo-700"
        >
          Sign Out
        </button>
      </nav>
    );
  }
}

export default Header;
