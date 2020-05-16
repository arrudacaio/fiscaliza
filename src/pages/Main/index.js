import React, { useState, Fragment } from "react";
import Card from "../../components/Card/Card";
import currency from "currency.js";
import "./styles.css";
import api from "../../services/api";

export default function Main() {
  const [deputado, setDeputado] = useState("");
  const [img, setImg] = useState("");
  const [id, setId] = useState("");
  const [partido, setPartido] = useState("");
  const [gastos, setGastos] = useState();
  const [ano, setAno] = useState();

  function somaValores(lista) {
    var total = 0;
    for (var i = 0; i < lista.length; i++) {
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

      if (user && ano) {
        const res = await api.get(`?nome=${user}`);
        const dados = res.data.dados[0];
        const despesas = await api.get(
          `/${dados.id}/despesas?ano=${ano}&ordem=ASC&ordenarPor=ano`
        );
        const listaDados = despesas.data.dados;

        setId(dados.id);
        setDeputado(dados.nome);
        setImg(dados.urlFoto);
        setPartido(dados.siglaPartido);

        const gastos = listaDados.map((despesa) => {
          if (despesa.ano === Number(ano)) {
            return despesa.valorLiquido;
          }
        });

        var totalGastos = somaValores(gastos);
        //setGastos(totalGastos.toFixed(2));
        setGastos(
          currency(totalGastos.toFixed(2), {
            separator: ".",
            decimal: ",",
          }).format()
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="logo">
        <h1>FISCALIZA</h1>
        <p>consulte os gastos dos parlamentares com mandato em andamento</p>
      </div>
      <form onSubmit={getDeputado}>
        <input type="text" placeholder="Nome do deputado" name="deputado" />
        <input id="number" type="number" placeholder="Ano" name="ano" />
        <button type="submit">Pesquisar</button>
      </form>
      {deputado && ano ? (
        <Card
          img={img}
          deputado={deputado}
          partido={partido}
          ano={ano}
          gastos={gastos}
        />
      ) : (
        <Fragment />
      )}
      <footer>
        <p>
          Todos os dados foram retirados da API de Dados Abertos da Câmara dos
          Deputados
        </p>
      </footer>
    </div>
  );
}
