import React from "react";
import terms from "./infographic/Termos.png";
import infographic from "./infographic/Infografico.png";

const MainInfographic = () => (
  <main className={`my-4 App-main`}>
    <img src={terms} alt="Termos Essenciais LGPD"></img>
    <img src={infographic} alt="Infografico LGPD"></img>
  </main>
);

export default MainInfographic;
