import React from 'react';
import './styles.css';
///import Model from '../../components/Model/index';

export default function Despesas(){
  return(
    //<Model title="Despesas do deputado" />
    <>
      <div className="sidebar">
        <header>FISCALIZA</header>
        <form>
          <h3>Despesas do Deputado:</h3>
          <input type="text" placeholder="Nome do Deputado"  />
          <input type="text" placeholder="Ano das despesas"  />
          <button type="submit">Pesquisar</button>
        </form>
      </div>
      <div class="content">
        <p>OIIIIII</p>
      </div>
    </>

  );
}