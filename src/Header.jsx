import React, { useState } from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [navBar, toggleNavBar] = useState(true);
  return (
    <div className={`shadow-xl`}>
      <nav className="flex items-center justify-between flex-wrap bg-blue-700 shadow border-solid border-b-2 border-blue-200 shadow p-3">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            <Link to="/">
              <img
                className="fill-current h-8 w-16 mr-2"
                width="70"
                height="70"
                src={logo}
              ></img>
            </Link>
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => toggleNavBar(!navBar)}
            className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-gray hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            navBar ? "hidden" : ""
          } w-full block lg:flex lg:items-left lg:w-auto`}
        >
          <div className={`text-sm`}>
            <button className="block mt-4 px-3 py-2  rounded lg:inline-block lg:mt-0 text-white hover:text-blue-200 mr-4">
              <Link to="/">HOME</Link>
            </button>
            <button className="block mt-4 px-3 py-2  rounded lg:inline-block lg:mt-0 text-white hover:text-blue-200 mr-4">
              <Link to="/sobre">SOBRE</Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
