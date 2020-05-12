import React from 'react';
import { Link  } from 'react-router-dom';

import './styles.css';
///import Model from '../../components/Model/index';

export default function Despesas(){
  return(
    //<Model title="Despesas do deputado" />
    <>
      <div className="sidebar">
        <Link to="/">
          <header>FISCALIZA</header>
        </Link>
        <form>
          <h3>Despesas do Deputado:</h3>
          <input type="text" placeholder="Nome do Deputado"  />
          <input type="text" placeholder="Ano das despesas"  />
          <button type="submit">Pesquisar</button>
        </form>
      </div>
      <div class="content">
        <h1>Despesas</h1>
        <p>
          Despesas dos parlamentares com
          mandato em exercício.
        </p>
        <div className="card">
          <img src="https://www.camara.leg.br/internet/deputado/bandep/76874.jpg" />
          <div className="card-content">
            <h1>Marcelo Freixo</h1>
            <p>Partido: PSOL</p>
            <h3>Despesas do Deputado em 2020:</h3>
            <h2>R$ 34.241 Reais</h2>
          </div>
        </div>
        
      </div>
    </>

  );
}