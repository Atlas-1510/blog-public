import React from "react";
import { Link } from "react-router-dom";

function Header() {
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
}

export default Header;
