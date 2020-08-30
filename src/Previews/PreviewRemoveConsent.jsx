import React from "react";
import Latex from "react-latex";

const PreviewRemoveConsent = ({ data }) => {
  const text1 = `Revogar o meu consentimento de tratamento de dados perante à requerida, com fulcro no art. 18, IX do caput, da Lei nº. 13.709/2018 (LGPD). `;
  const text2 = `Isto posto, cumpre-se salientar os termos do art. 8º, § 5º da referida legislação, uma vez que o consentimento pode ser revogado a qualquer momento mediante manifestação expressa do titular, por procedimento gratuito e facilitado, ratificados os tratamentos realizados sob amparo do consentimento anteriormente manifestado, enquanto não houver requerimento de eliminação, pelos moldes do inciso VI do caput do art. 18.`;
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

export default PreviewRemoveConsent;
