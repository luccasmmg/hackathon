import React from "react";
import Latex from "react-latex";

const PreviewElimination = ({ data }) => {
  const text1 = `Requerer a Eliminação de Dado Pessoais Tratados com o meu Consentimento, quando houver o término do tratamento, com fulcro no art. 18, VI do caput, da Lei nº. 13.709/2018 (LGPD).`;
  const text2 = `Frisa-se que a informação pessoal em questão se refere a ${data.toEliminate}`;
  const text3 = `Ademais, faz-se imperioso destacar a minha autorização de conservação de dados para as seguintes finalidades: (i) cumprimento de obrigação legal ou regulatória pelo controlador; (ii) estudo por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais; (iii) transferência a terceiro, desde que respeitados os requisitos de tratamento de dados dispostos nesta Lei; ou (iv) uso exclusivo do controlador, vedado seu acesso por terceiro, e desde que anonimizados os dados. Respeitando o disposto no art. 16 da Lei nº. 13.709/2018 (LGPD).`;
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
          <br></br>
          <Latex displayMode={true}>{text3}</Latex>
        </div>
      </div>
    </div>
  );
};

export default PreviewElimination;
