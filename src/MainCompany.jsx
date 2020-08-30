import React from "react";
import header from "./Headers/HeaderEmpresa.png";
import { Link } from "react-router-dom";

const MainCompany = () => (
  <main className={`App-main`}>
    <img src={header} alt="Header Empresa" />
    <p className={"text-blue-700"}>Teste LGPD</p>
  </main>
);

export default MainCompany;
