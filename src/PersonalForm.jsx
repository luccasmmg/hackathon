import React from "react";

import InputText from "./InputText.jsx";
import InputNumber from "./InputNumber.jsx";
import InputSelect from "./InputSelect.jsx";

const PersonalForm = ({
  setName,
  name,
  setNationality,
  nationality,
  setCivilState,
  civilState,
  rgEmitter,
  setRgEmitter,
  setEmail,
  email,
  setWork,
  work,
  setRg,
  rg,
  setCPF,
  cpf,
  setStreet,
  street,
  setAddress,
  address,
  setNeighbourhood,
  neighbourhood,
  setCity,
  city,
  setState,
  state,
  setResponse,
  response,
}) => {
  const civilStatePossibilities = [
    "Solteiro(a)",
    "Casado(a)",
    "Divorciado(a)",
    "Viúvo(a)",
    "Separado(a)",
  ];
  const statePossibilities = [
    "AC",
    "AL",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];
  return (
    <div className={`my-8 border shadow-xl w-full`}>
      {" "}
      <h4 className={"text-blue-700"}>Dados do Usuário</h4>
      <form className={`p-5 flex-wrap flex flex-grow`}>
        <div className={`flex flex-wrap`}>
          <InputText
            setField={setName}
            field={name}
            placeholder={"Luccas Mateus"}
            name={"Nome Completo"}
          />
          <InputText
            setField={setWork}
            field={work}
            placeholder={"Advogado"}
            name={"Profissão"}
          />
        </div>
        <div className={`flex flex-wrap flex-grow`}>
          <InputText
            setField={setNationality}
            field={nationality}
            placeholder={"Brasileiro"}
            name={"Nacionalidade"}
          />
          <InputSelect
            setField={setCivilState}
            field={civilState}
            possibilities={civilStatePossibilities}
            name={"Estado Civil"}
          />
        </div>
        <div className={`flex flex-wrap flex-grow`}>
          <InputNumber
            setField={setRg}
            field={rg}
            placeholder={"0000000"}
            name={"RG"}
          />
          <InputText
            setField={setRgEmitter}
            field={rgEmitter}
            placeholder={"SSP"}
            name={"Emissor do RG"}
          />
        </div>
        <div className={`flex flex-wrap flex-grow`}>
          <InputNumber
            setField={setCPF}
            field={cpf}
            placeholder={"00000000"}
            name={"CPF"}
          />
          <InputText
            setField={setEmail}
            field={email}
            placeholder={"email@exemplo.com"}
            name={"Email"}
          />
        </div>
        <div className={`flex flex-wrap flex-grow`}>
          <InputText
            setField={setStreet}
            field={street}
            placeholder={"Tenente Osório"}
            name={"Rua"}
          />
          <InputNumber
            setField={setAddress}
            field={address}
            placeholder={"204"}
            name={"Número"}
          />
        </div>
        <div className={`flex flex-wrap flex-grow`}>
          <InputText
            setField={setNeighbourhood}
            field={neighbourhood}
            placeholder={"Santos Reis"}
            name={"Bairro"}
          />
          <InputSelect
            setField={setState}
            field={state}
            possibilities={statePossibilities}
            name={"Estado"}
          />
        </div>
        <div className={`flex flex-wrap flex-grow`}>
          <InputText
            setField={setCity}
            field={city}
            placeholder={"João Pessoa"}
            name={"Cidade"}
          />
          <InputText
            setField={setResponse}
            field={response}
            placeholder={"Eletrônica ou Fisica"}
            name={"Forma de resposta"}
          />
          
        
        </div>
      </form>
    </div>
  );
};

export default PersonalForm;
