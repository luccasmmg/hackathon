import React, { useState } from "react";
import PreviewList from "./PreviewList.jsx";
import PersonalForm from "./PersonalForm.jsx";

import CompanyForm from "./CompanyForm.jsx";

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
  const [state, setState] = useState("");
  const [response, setResponse] = useState("");
  const [dataOfficer, setDatOfficer] = useState("");
  const [technicalResponsible, setTechnicalResponsible] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [city, setCity] = useState("");
  const [consentFlag, setConsentFlag] = useState(true);
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
        setWork={setWork}
        work={work}
        setNeighbourhood={setNeighbourhood}
        setNationality={setNationality}
        nationality={nationality}
        rgEmitter={rgEmitter}
        setRgEmitter={setRgEmitter}
        email={email}
        setEmail={setEmail}
        civilState={civilState}
        setCivilState={setCivilState}
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
      <PreviewList
        flags={{
          consentFlag,
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
