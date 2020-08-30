import React from "react";

import InputText from "./InputText.jsx";

const CorrectionForm = ({
  setCorrectionFlag,
  correctionFlag,
  currentData,
  setCurrentData,
  correctedData,
  setCorrectedData,
}) => {
  return (
    <div className={`my-8 border shadow-xl w-full `}>
      {" "}
      <button
        onClick={() => setCorrectionFlag(!correctionFlag)}
        className={`text-sm my-2 bg-blue-500 hover:bg-blue-700 text-white folt-bold py-2 px-4`}
      >
        Corrigir dados em documento
      </button>
      <form
        className={`${
          !correctionFlag ? `opacity-50` : ``
        } p-5 flex-wrap flex flex-grow`}
      >
        <div className={"flex w-full justify-center"}></div>
        <div className={`flex flex-wrap flex-grow`}>
          <InputText
            setField={setCurrentData}
            field={currentData}
            placeholder={"Email incorrecto/Nome de usuario incorrecto:"}
            name={"Dados atuais"}
          />
          <InputText
            setField={setCorrectedData}
            field={correctedData}
            placeholder={"Email correcto/Nome de usuario correcto"}
            name={"Dados novos"}
          />
        </div>
      </form>
    </div>
  );
};

export default CorrectionForm;
