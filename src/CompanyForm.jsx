import React from "react";

import InputText from "./InputText.jsx";

const CompanyForm = ({
  dataOfficer,
  setDataOfficer,
  technicalResponsible,
  setTechnicalResponsible,
}) => {
  return (
    <div className={`my-8 border shadow-xl w-full `}>
      {" "}
      <h4 className={`text-blue-700`}>Dados da Empresa</h4>
      <form className={`p-5 flex-wrap flex flex-grow`}>
        <div className={`flex flex-wrap flex-grow`}>
          <InputText
            setField={setDataOfficer}
            field={dataOfficer}
            placeholder={""}
            name={"Nome da Empresa"}
          />
          <InputText
            setField={setTechnicalResponsible}
            field={technicalResponsible}
            placeholder={"Encarregado dos Dados"}
            name={"Nome do Data Protection Officer da Empresa"}
          />
        </div>
      </form>
    </div>
  );
};

export default CompanyForm;
