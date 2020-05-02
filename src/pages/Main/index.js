import React from 'react';

import Box from '../../components/Box/Box';

import './styles.css';

export default function Main(){
  return(
    <>
      <div className="logo">
        <h1>FISCALIZA</h1>
        <p>consulte os gastos dos parlamentares com mandato em andamento</p>
      </div>
      <div className="container">
        <Box 
          title="Despesas"
          resume="Despesas dos parlamentares com
          mandato em exercício."
          go="/Despesas"
          btnText="Consultar"
        />
        <Box 
          title="Eventos"
          resume="Uma lista de eventos com a participação
          do parlamentar."
          btnText="Consultar"
        />
        <Box 
          title="Eventos"
          resume="Uma lista de eventos com a participação
          do parlamentar."
          btnText="Consultar"
        />
      </div>
    </>
  );




}