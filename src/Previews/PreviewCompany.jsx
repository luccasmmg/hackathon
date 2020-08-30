import React from "react";
import Latex from "react-latex";

const PreviewCorrection = ({ data }) => {
  const text1 = `Sr. ${data.technicalResponsible}`
  const text2 = `Responsável técnico pela Política de Proteção de Dados da Empresa ${data.dataOfficer}`;
  const text3 = `Requerimento.`
  const text4='Para devidos fins declaro que sou maior e possuo capacidade civil plena'
  return (
    <div>
      <div>
        <div
          style={{ textAlign: "justify", color: "black", fontSize: "16px" }}
          className={"pdf"}
        >
          <p style={{textAlign:"center",fontWeight:"bold"}}>{text4}</p><br></br>
          <p style={{textAlign:"center",fontWeight:"bold"}}>{text3}</p><br>
          {/* </br><Latex displayMode={true} >{text3}</Latex><br> */}
          </br>
          <Latex displayMode={true}>{text1}</Latex>
          <br></br>
          <Latex displayMode={true}>{text2}</Latex>

        </div>
      </div>
    </div>
  );
};

export default PreviewCorrection;
