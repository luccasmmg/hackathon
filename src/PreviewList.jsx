import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Latex from "react-latex";

import PreviewCompany from "./Previews/PreviewCompany";
import PreviewPersonal from "./Previews/PreviewPersonal";
import PreviewConfirmation from "./Previews/PreviewConfirmation";
import PreviewDeclaration from "./Previews/PreviewDeclaration";
import PreviewIntegralCopy from "./Previews/PreviewIntegralCopy";
import PreviewConsent from "./Previews/PreviewConsent";
import PreviewCorrection from "./Previews/PreviewCorrection";
import PreviewElimination from "./Previews/PreviewElimination";
import PreviewAnonimity from "./Previews/PreviewAnonimity";
import PreviewPortability from "./Previews/PreviewPortability";
import PreviewExplanation from "./Previews/PreviewExplanation";
import PreviewPossibilityNoConsent from "./Previews/PreviewPossibilityNoConsent";
import PreviewRemoveConsent from "./Previews/PreviewRemoveConsent";
import PreviewRevision from "./Previews/PreviewRevision";

const PreviewList = ({ data, flags }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  const space=`                          `
  const text1 = `${space}O prazo de resposta, estabelecido por lei é de 15 (quinze) dias, contato da data deste requerimento, como aduz o art. 19, inciso II, da Lei nº. 13.709/2018 (LGPD).  Portanto, espero a resposta no prazo mencionado, sob pena de tomar as medidas judiciais cabíveis.`;
  const text2 = `${space}Por fim, baseando-se no art. 19, §2º da lei supramencionada, solicito que o envio desta informação por via ${data.personal.response}, consoante dados expostos alhures. `;

  return (
    <div className={`my-2`}>
      <div ref={componentRef}>
        <PreviewCompany data={data.company} />
        <br></br>
        <PreviewPersonal data={data.personal} />
        {flags.confirmationFlag === true ? (
          <PreviewConfirmation />
        ) : (
          <span></span>
        )}
        {flags.declarationFlag === true ? (
          <PreviewDeclaration />
        ) : (
          <span></span>
        )}
        {flags.integralCopyFlag === true ? (
          <PreviewIntegralCopy />
        ) : (
          <span></span>
        )}
        {flags.consentFlag === true ? <PreviewConsent /> : <span></span>}
        {flags.correctionFlag === true ? (
          <PreviewCorrection data={data.correction} />
        ) : (
          <span></span>
        )}
        {flags.anonimityFlag === true ? <PreviewAnonimity /> : <span></span>}
        {flags.portabilityFlag === true ? (
          <PreviewPortability />
        ) : (
          <span></span>
        )}
        {flags.explanationFlag === true ? (
          <PreviewExplanation />
        ) : (
          <span></span>
        )}
        {flags.eliminationFlag === true ? (
          <PreviewElimination data={data.elimination} />
        ) : (
          <span></span>
        )}
        {flags.possibilityNoConsentFlag === true ? (
          <PreviewPossibilityNoConsent />
        ) : (
          <span></span>
        )}
        {flags.removeConsentFlag === true ? (
          <PreviewRemoveConsent />
        ) : (
          <span></span>
        )}
        {flags.revisionFlag === true ? <PreviewRevision /> : <span></span>}
        
        <div
          style={{ textAlign: "justify", color: "black", fontSize: "16px" }}
          className={"pdf"}
        ><br></br>
          <Latex displayMode={true}>{text1}</Latex>
        </div>
        <div
          style={{ textAlign: "justify", color: "black", fontSize: "16px" }}
          className={"pdf"}
        >
          <br></br>
          <Latex displayMode={true}>{text2}</Latex>
        </div>
      </div>
      <button
        className={`w-full my-4 bg-blue-700 hover:bg-blue-700 text-center text-white font-bold py-2 px-4 border border-blue-700 rounded w-full`}
        onClick={handlePrint}
      >
        Clique aqui para gerar o PDF
      </button>
    </div>
  );
};

export default PreviewList;
