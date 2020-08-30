import React from "react";
import Latex from "react-latex";

const PreviewExplanation = ({ data }) => {
  const text = `Requerer o Envio de Declaração Explicativa, sobre todas os dados que o requerido compartilhou com qualquer entidades, sejam elas públicas ou privadas, com fulcro no art. 18, VII do caput, da Lei nº. 13.709/2018 (LGPD).  `;
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

export default PreviewExplanation;
