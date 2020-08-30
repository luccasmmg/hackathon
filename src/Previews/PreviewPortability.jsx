import React from "react";
import Latex from "react-latex";

const PreviewPortability = ({ data }) => {
  const text1 = `Requerer a Portabilidade dos Dados a outro Fornecedor, de acordo com a regulamentação da autoridade nacional, observados os segredos comercial e industrial, com fulcro no art. 18, V do caput, da Lei nº. 13.709/2018 (LGPD).`;
  const text2 = `Isto Posto, a Autoridade Nacional de Proteção de Dados (ANPD) regulamenta que... `;
  return (
    <div>
      <div>
        <div
          style={{ textAlign: "justify", color: "black", fontSize: "16px" }}
          className={"pdf"}
        >
          <Latex displayMode={true}>{text1}</Latex>
          <Latex displayMode={true}>{text2}</Latex>
        </div>
      </div>
    </div>
  );
};

export default PreviewPortability;
