import React from 'react';
import './styles.css';


export default function Card({deputado, img, partido, ano, gastos}){

  return(
    <div className="card">
      <div style={{ minWidth: 114 }}>
        <img alt={deputado} src={img} />
      </div>
      <div className="infos">
        <h1>{deputado}</h1>
        <p>Partido: {partido}</p>
        <h3>Despesas do Deputado em {ano}:</h3>
        <h2>R$ {gastos} Reais</h2>
      </div>
    </div>
  );
}
