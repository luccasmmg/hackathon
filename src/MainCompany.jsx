import React from "react";
import header from "./Headers/HeaderEmpresa.png";
//import survey from "./survey.png";
import { Link } from "react-router-dom";

const MainCompany = () => (
  <main className={`App-main`}>
    <img src={header} alt="Header Empresa" />
    {/* <img src={survey} alt="Survey Empresa" /> */}
  </main>
);

export default MainCompany;
