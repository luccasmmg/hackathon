import React from "react";

import InputText from "./InputText.jsx";

const EliminationForm = ({
  setEliminationFlag,
  eliminationFlag,
  toEliminate,
  setToEliminate,
}) => {
  return (
    <div className={`my-8 border shadow-xl w-full `}>
      {" "}
      <button
        onClick={() => setEliminationFlag(!eliminationFlag)}
        className={`text-sm w-11/12 my-2 bg-blue-500 hover:bg-blue-700 text-white folt-bold py-2 px-4`}
      >
        Adicionar requerimento de eliminação de dados
      </button>
      <form
        className={`${
          !eliminationFlag ? `opacity-50` : ``
        } p-5 flex-wrap flex flex-grow`}
      >
        <div className={"flex w-full justify-center"}></div>
        <div className={`flex flex-wrap flex-grow`}>
          <InputText
            setField={setToEliminate}
            field={toEliminate}
            placeholder={"Email/Nome de usuario/Telefone:"}
            name={"Dados para eliminar"}
          />
        </div>
      </form>
    </div>
  );
};

export default EliminationForm;
