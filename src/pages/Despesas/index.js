import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';



export default function Despesas(){
  const [deputado, setDeputado] = useState('');
  const [img, setImg ] = useState('');
  const [id, setId] = useState('');
  const [partido, setPartido] = useState('');
  const [gastos, setGastos] = useState();
  const [ano, setAno] = useState();

  function somaValores(lista){
    var total = 0;
    for(var i = 0; i < lista.length; i++){
      total += lista[i];
    } 
    return total;
  }

  const getDeputado = async (e) => {
    try {
      e.preventDefault();

      const user = e.target.elements.deputado.value;
      const ano = e.target.elements.ano.value;
      setAno(ano);

      if(user && ano) {
        const res = await api.get(`?nome=${user}`);
        const dados = res.data.dados[0]; 
        const despesas = await api.get(`/${dados.id}/despesas?ano=${ano}&ordem=ASC&ordenarPor=ano`);
        const listaDados = despesas.data.dados;
        

        setId(dados.id);
        setDeputado(dados.nome);
        setImg(dados.urlFoto);
        setPartido(dados.siglaPartido);
        
        
        const gastos = listaDados.map(despesa => {
          if(despesa.ano === Number(ano)){
            return despesa.valorLiquido;
          }
        });

        var totalGastos = somaValores(gastos);
        setGastos(totalGastos.toFixed(2));

 

      }

    } catch (error) {
      console.log(error);
    }

  }



  return(
    <>
      <div className="sidebar">
        <Link to="/">
          <header>FISCALIZA</header>
        </Link>
        <form onSubmit={getDeputado}>
          <h3>Despesas do Deputado:</h3>
          <input type="text" placeholder="Nome do Deputado" name="deputado" />
          <input type="text" placeholder="Ano das despesas"  name="ano"/>
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
          <img src={img} />
          <div className="card-content">
            <h1>{deputado}</h1>
            <p>Partido: {partido}</p>
            <h3>Despesas do Deputado em {ano}:</h3>
            <h2>R$ {gastos}</h2>
          </div>
        </div>
        
      </div>
    </>

  );
}