import React from 'react';
import {  Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

export default function Model(props){
  return(
    <div className="rectangule">
      <Link to="/" >
        <h1>FISCALIZA</h1>
      </Link>
      <form>
        <h2>{props.title}</h2>
        <input type="text"  placeholder="Nome do Deputado"/>
        <input type="text"  placeholder="Ano das despesas"/>
        <button type="button"><FiSearch /></button>
        <h3>Ex: Marcelo Freixo</h3>
      </form>
    </div>

  );
}