import React from "react";
import Latex from "react-latex";

const PreviewAnonimity = ({ data }) => {
  const text = `Requerer a Anonimização (ou) Bloqueio (ou) Eliminação de Dados Desnecessários (ou) Excessivos (ou) Tratados em Desconformidade com a boa-fé e os princípios do art. 8º da LGPD, com fulcro no art. 18, IV do caput, da Lei nº. 13.709/2018 (LGPD). `;
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

export default PreviewAnonimity;
