import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";

function Articles() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Articles;
