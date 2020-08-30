import React, { useState } from "react";
import PreviewList from "./PreviewList.jsx";
import PersonalForm from "./PersonalForm.jsx";

import CompanyForm from "./CompanyForm";

import JustButton from "./JustButton.jsx";

const MaybeDataForm = () => {
  const [name, setName] = useState("");
  const [cpf, setCPF] = useState("");
  const [work, setWork] = useState("");
  const [nationality, setNationality] = useState("");
  const [civilState, setCivilState] = useState("");
  const [rgEmitter, setRgEmitter] = useState("");
  const [email, setEmail] = useState("");
  const [rg, setRg] = useState("");
  const [street, setStreet] = useState("");
  const [address, setAddress] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [response, setResponse] = useState("");
  const [dataOfficer, setDatOfficer] = useState("");
  const [technicalResponsible, setTechnicalResponsible] = useState("");
  const [confirmationFlag, setConfirmationFlag] = useState(false);
  const [declarationFlag, setDeclarationFlag] = useState(false);
  const [integralCopyFlag, setIntegralCopyFlag] = useState(false);
  return (
    <main className={`App-main`}>
      {" "}
      <CompanyForm
        setDataOfficer={setDatOfficer}
        dataOfficer={dataOfficer}
        technicalResponsible={technicalResponsible}
        setTechnicalResponsible={setTechnicalResponsible}
      />
      <PersonalForm
        setName={setName}
        name={name}
        setNationality={setNationality}
        nationality={nationality}
        rgEmitter={rgEmitter}
        setRgEmitter={setRgEmitter}
        email={email}
        setEmail={setEmail}
        civilState={civilState}
        setCivilState={setCivilState}
        setWork={setWork}
        work={work}
        setNeighbourhood={setNeighbourhood}
        setCity={setCity}
        city={city}
        setCPF={setCPF}
        cpf={cpf}
        setRg={setRg}
        rg={rg}
        setStreet={setStreet}
        street={street}
        setAddress={setAddress}
        address={address}
        setState={setState}
        state={state}
        setResponse={setResponse}
        response={response}
      />
      <JustButton
        setFlag={setConfirmationFlag}
        flag={confirmationFlag}
        text={"Adicionar requerimento de confirmação de uso de dados"}
      />
      <JustButton
        setFlag={setDeclarationFlag}
        flag={declarationFlag}
        text={
          "Adicionar requerimento de declaração explicativa de uso de dados"
        }
      />
      <JustButton
        setFlag={setIntegralCopyFlag}
        flag={integralCopyFlag}
        text={"Adicionar requerimento de copia integral de meus dados pessoais"}
      />
      <PreviewList
        flags={{
          confirmationFlag,
          declarationFlag,
          integralCopyFlag,
        }}
        data={{
          personal: {
            name,
            cpf,
            rgEmitter,
            nationality,
            email,
            civilState,
            work,
            rg,
            street,
            address,
            neighbourhood,
            city,
            state,
            response,
          },
          company: {
            dataOfficer,
            technicalResponsible,
          },
        }}
      />
    </main>
  );
};

export default MaybeDataForm;
