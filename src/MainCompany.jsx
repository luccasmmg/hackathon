
import React from "react";
import header from "./Headers/HeaderEmpresa.png";

import { Link } from "react-router-dom";

const MainCompany = () => (
  <main className={`App-main`}>
    <a href="https://drive.google.com/file/d/1H4iMeLiZda9CegYtfFpryIgZ5KdEwG2v/view?usp=sharing" target="_blank"><b>CLIQUE NA IMAGEM ABAIXO E  </b><img src={header} alt="Header Empresa" /></a>
  </main>
);

export default MainCompany;
