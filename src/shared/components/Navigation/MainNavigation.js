import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import React from "react";
import { Link } from "react-router-dom";

const MainNavigation = props => {
  return (
    <MainHeader>
      <button>
        <span />
        <span />
        <span />
      </button>
      <h1 className={"main-navigation__title"}>
        <Link to={"/"}>YourPlaces</Link>
      </h1>
      <nav></nav>
    </MainHeader>
  );
};

export default MainNavigation;
