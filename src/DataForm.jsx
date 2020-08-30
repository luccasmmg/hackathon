import React, { useState } from "react";
import PreviewList from "./PreviewList.jsx";
import PersonalForm from "./PersonalForm.jsx";
import CorrectionForm from "./CorrectionForm.jsx";
import EliminationForm from "./EliminationForm.jsx";
import CompanyForm from "./CompanyForm.jsx";

import JustButton from "./JustButton.jsx";

const MaybeDataForm = () => {
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [civilState, setCivilState] = useState("");
  const [rg, setRg] = useState("");
  const [rgEmitter, setRgEmitter] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCPF] = useState("");
  const [work, setWork] = useState("");
  const [street, setStreet] = useState("");
  const [address, setAddress] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [response, setResponse] = useState("");
  const [currentData, setCurrentData] = useState("");
  const [correctedData, setCorrectedData] = useState("");
  const [toEliminate, setToEliminate] = useState("");
  const [dataOfficer, setDatOfficer] = useState("");
  const [technicalResponsible, setTechnicalResponsible] = useState("");
  const [correctionFlag, setCorrectionFlag] = useState(false);
  const [anonimityFlag, setAnonimityFlag] = useState(false);
  const [portabilityFlag, setPortabilityFlag] = useState(false);
  const [eliminationFlag, setEliminationFlag] = useState(false);
  const [explanationFlag, setExplanationFlag] = useState(false);
  const [possibilityNoConsentFlag, setPossibilityNoConsentFlag] = useState(
    false
  );
  const [removeConsentFlag, setRemoveConsentFlag] = useState(false);
  const [revisionFlag, setRevisionFlag] = useState(false);
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
      <div className={`my-8 border shadow-xl`}>
        <CorrectionForm
          setCurrentData={setCurrentData}
          currentData={currentData}
          setCorrectedData={setCorrectedData}
          correctedData={correctedData}
          correctionFlag={correctionFlag}
          setCorrectionFlag={setCorrectionFlag}
        />
        <JustButton
          setFlag={setAnonimityFlag}
          flag={anonimityFlag}
          text={"Adicionar requerimento de anonimização de dados"}
        />
        <JustButton
          setFlag={setPortabilityFlag}
          flag={portabilityFlag}
          text={"Adicionar requerimento de portabilidade de dados"}
        />
        <EliminationForm
          setToEliminate={setToEliminate}
          toEliminate={toEliminate}
          eliminationFlag={eliminationFlag}
          setEliminationFlag={setEliminationFlag}
        />
        <JustButton
          setFlag={setExplanationFlag}
          flag={explanationFlag}
          text={"Adicionar requerimento de explicação sobre todos os dados"}
        />
        <JustButton
          setFlag={setPossibilityNoConsentFlag}
          flag={possibilityNoConsentFlag}
          text={
            "Adicionar requerimento de explicação sobre a possibilidade de revogar consentimento"
          }
        />
        <JustButton
          setFlag={setRemoveConsentFlag}
          flag={removeConsentFlag}
          text={"Adicionar requerimento de revogação consentimento"}
        />
        <JustButton
          setFlag={setRevisionFlag}
          flag={revisionFlag}
          text={
            "Adicionar requerimento de revisão de decisões tomadas por tratamento automatizado"
          }
        />
      </div>
      <PreviewList
        flags={{
          correctionFlag,
          anonimityFlag,
          portabilityFlag,
          eliminationFlag,
          explanationFlag,
          possibilityNoConsentFlag,
          removeConsentFlag,
          revisionFlag,
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
          correction: {
            currentData,
            correctedData,
          },
          elimination: {
            toEliminate,
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
