import React, { useRef } from "react";
import Latex from "react-latex";

const PreviewConfirmation = () => {
  const text1 =
    "Requerer o Envio de Declaração Explicativa de todos os dados de minha titularidade armazenados nesta empresa e não anonimizados, com fulcro art. 18, inciso II do caput, da Lei nº. 13.709/2018 (LGPD).";
  const text2 =
    "Frisa-se que, nos moldes do nosso ordenamento jurídico, é obrigado constar no documento enviado pela requerida: (i) da origem de dados; (ii) da inexistência de registro; (iii) dos critérios utilizados para coleta e tratamento de dados; (iv) da finalidade do tratamento.";
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

export default PreviewConfirmation;
