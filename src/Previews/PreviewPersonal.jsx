import React, { useRef } from "react";
import Latex from "react-latex";

const PreviewPersonal = ({ data }) => {
  const space = `                              `
  const nome=`${space}${data.name}`
  const text = `${data.nationality}, ${data.civilState},Profisão ${data.work},Portador(a) da Célula de Identidade nº ${data.rg} ${data.rgEmitter}, inscrito(a) no CPF sob o nº ${data.cpf}, usuário do endereço eletrônico: ${data.email}, residente e domiciliado na Rua ${data.street}, ${data.neighbourhood}, ${data.city}, estado ${data.state}, venho respeitosamente por este instrumento, com base no exercício do direito de acesso à informação garantido no inciso XXXIII do art. 5º da Constituição Federal e na Lei nº. 12.527/11`;


  return (
    <div>
      <div>
        <div
          style={{ textAlign: "justify", color: "black", fontSize: "16px" }}
          className={"pdf"}
        >
          
          
          <p displayMode={true}><span style={{ fontWeight: "bold" }}>{nome}</span>{text}</p>
          {/* <Latex displayMode={true}>{text}</Latex> */}
        </div>
      </div>
    </div>
  );
};

export default PreviewPersonal;
