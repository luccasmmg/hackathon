import React from "react";
import Latex from "react-latex";

const PreviewRevision = () => {
  const text1 = `Requerer a revisão das decisões tomadas por tratamento automatizado de dados pessoais, com fulcro no art. 20 da Lei nº. 13.709/2018 (LGPD). `;
  const text2 = `Faz-se imperioso destacar que esta solicitação abarca os dados que afetam os meus interesses sociais, incluídas as decisões destinadas a definir o seu perfil pessoal, profissional, de consumo e de crédito ou os aspectos de sua personalidade.`;
  return (
    <div>
      <div>
        <div
          style={{ textAlign: "justify", color: "black", fontSize: "16px" }}
          className={"pdf"}
        >
          <Latex displayMode={true}>{text1}</Latex>
          <br></br>
          <Latex displayMode={true}>{text2}</Latex>
        </div>
      </div>
    </div>
  );
};

export default PreviewRevision;
