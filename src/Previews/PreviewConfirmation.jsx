import React from "react";
import Latex from "react-latex";

const PreviewConfirmation = () => {

  
  const text =
    "Requerer a Confirmação de Existência de Tratamento de Dados Pessoais, armazenados neste empresa e não anonimizados, com fulcro no art. 18, inciso I do caput, da Lei nº. 13.709/2018 (LGPD).";
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

export default PreviewConfirmation;
