import React from 'react';
import './styles.css';


export default function Card(props){
  return(
    <div className="card">
      <img src={props.img} />
      <div className="infos">
        <h1>{props.deputado}</h1>
        <p>Partido: {props.partido}</p>
        <h3>Despesas do Deputado em {props.ano}:</h3>
        <h2>R$ {props.gastos} Reais</h2>
      </div>
    </div>
  );
}