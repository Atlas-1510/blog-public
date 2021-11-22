import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";

function Articles({ clearValue }) {
  return (
    <div className="flex-grow">
      <Header clearValue={clearValue} />
      <Outlet />
    </div>
  );
}

export default Articles;
