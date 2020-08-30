import React from "react";
import logo from "./logo.png";
import iconCitizen from "./icons/iconCitizen.svg";
import iconCompany from "./icons/iconCompany.svg";
import iconInfographic from "./icons/iconInfographic.svg";
import { Link } from "react-router-dom";

const Main = () => (
  <main className={`App-main`}>
    <div className={`my-8 rounded bg-white p-3 border shadow-2xl`}>
      {" "}
      <img src={logo} alt="Logo" />
      <br></br>
      <div className={`flex flex-wrap justify-center`}>
        <div
          className={`w-3/5 shadow-xl block py-2 px-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110`}
        >
          <Link to="/requirement">
            <img src={iconCitizen} alt="icon-Citizen"></img>
          </Link>
        </div>
        <br></br>
        <div
          className={`w-3/5 shadow-xl block py-2 px-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110`}
        >
          <Link to="/company">
            <img src={iconCompany} alt="icon-company"></img>
          </Link>
        </div>
        <div
          className={`w-3/5 shadow-xl block py-2 px-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110`}
        >
          <Link to="/infographic">
            <img src={iconInfographic} alt="icon-ifographic"></img>
          </Link>
        </div>
      </div>
    </div>{" "}
  </main>
);

export default Main;
