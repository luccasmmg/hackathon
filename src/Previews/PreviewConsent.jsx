import React from "react";
import Latex from "react-latex";

const PreviewConsent = () => {
  const text1 =
    "Requerer informações sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa, com fulcro no art. 18, VIII do caput, da Lei nº. 13.709/2018 (LGPD).";
  const text2 =
    "Isto posto, caso e não queira, livremente, expressar manifestação informada e inequívoca sobre estar de acordo com o tratamento dos meus dados pessoais, a sua empresa, dentro de uma finalidade determinada como dispõe o art. 7º., I, quais seriam as consequências desta minha atitude? ";
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

export default PreviewConsent;
