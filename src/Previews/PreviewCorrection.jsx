import React from "react";
import Latex from "react-latex";

const PreviewCorrection = ({ data }) => {
  const text1 = `Requerer a correção de dados incompletos (ou) inexatos (ou) desatualizados, com fulcro no art. 18, III do caput, da Lei nº. 13.709/2018 (LGPD).`;
  const text2 = `Frisa-se que o dado que consta em sua base de dados é ${data.currentData}. Contudo, a informação completa /correta/ atualizada é ${data.correctedData}.`;
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

export default PreviewCorrection;
