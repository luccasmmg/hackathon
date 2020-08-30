import React from "react";
import header from "./Headers/HeaderRequisicao.png";
import { Link } from "react-router-dom";

const MainRequirement = () => (
  <main className={`App-main`}>
    <img src={header} alt="Header Requerimento" />
    <br></br>
    <button className="block w-full bg-blue-800 hover:bg-blue-800 text-center text-white font-bold py-2 px-4 border border-blue-800 rounded w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <Link to="/requirement/maybedata">
        Eu não sei se a empresa possui meus dados
      </Link>
    </button>
    <br></br>
    <button className="block w-full bg-blue-800 hover:bg-blue-800 text-center text-white font-bold py-2 px-4 border border-blue-800 rounded w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <Link to="/requirement/nodata">A empresa não possui meus dados</Link>
    </button>
    <br></br>
    <button className="block w-full bg-blue-800 hover:bg-blue-800 text-center text-white font-bold py-2 px-4 border border-blue-800 rounded w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <Link to="/requirement/data">A empresa possui meus dados</Link>
    </button>
  </main>
);

export default MainRequirement;
