import React from "react";
import Latex from "react-latex";

const PreviewIntegralCopy = () => {
  const text =
    "Requerer a Cópia Eletrônica Integral dos meus dados pessoais, em respeito aos segredos comerciais e industriais da requerida, com base no art. 19, §3º, da Lei nº. 13.709/2018 (LGPD).  ";
  return (
    <div>
      <div>
        <div
          style={{ textAlign: "justify", color: "black", fontSize: "16px" }}
          className={"pdf"}
        >
          <Latex displayMode={true}>{text}</Latex>
        </div>
      </div>
    </div>
  );
};

export default PreviewIntegralCopy;
