import React from "react";

function Header() {
  return (
    <div className="flex flex-col items-center justify-center m-4 p-8 border-b border-primary-400">
      <h1 className="text-3xl font-extrabold my-2 text-primary-900">
        From the blog
      </h1>
      <p className=" text-primary-400 mt-2 text-center">
        A collection of thoughts, musings, and random shouts into the void.
      </p>
    </div>
  );
}

export default Header;
