import React from "react";



const space1 = `                              `
const space2 = `                            `

const Main = () => (
  <main className={`App-main`}>
    <h1 className={`my-4 text-blue-700`}>Sobre a Plataforma</h1>
    <p style={{ textAlign: "justify" }} className={`text-gray-700`}>
      {space1}A Atena LGPD é uma plataforma que tem como intuito ajudar as pessoas
      naturais e jurídicas a entenderem e se adaptarem perante os direitos e
      deveres instituídos na Lei Geral de Proteção de Dados, Lei nº 13.709/2018.<br></br>
      {space2} Nesta medida, cumpre-se destacar que a nossa missão é promover uma imersão
      à LGPD de forma clara, simples, objetiva e, acima de tudo, transparente,
      oferecendo modelos e soluções que visam garantir o tratamento adequado de
      dados.<br></br>
      {space2}Além disso, a nossa atuação é baseada na tradução daquilo descrito
      na lei em infográficos e modelos que facilitem o entendimento frente à Lei
      Geral de Proteção de Dados.
    </p>
  </main>
);

export default Main;

