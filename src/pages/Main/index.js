import React, { useState, Fragment } from "react";
import Card from "../../components/Card/Card";
import "./styles.css";
import { buscaDeputadoInfo } from "../../services/api";
import { parseToCurrency, somaValores } from '../../utils';

export default function Main() {
  const [deputado, setDeputado] = useState("");
  const [img, setImg] = useState("");
  const [id, setId] = useState("");
  const [partido, setPartido] = useState("");
  const [gastos, setGastos] = useState();
  const [ano, setAno] = useState();

  const [formObject, setFormObject] = useState({ deputado: "", ano: new Date().getFullYear() })

  const [carregando, setCarregando] = useState(false);
  const [deputadoNaoEncontrado, setDeputadoNaoEncontrado] = useState(false);

  const isFormValid = () => {
    return (formObject.deputado && formObject.ano);
  }

  const handleFormChange = (e) => {
    formObject[e.target.name] = e.target.value;
    setFormObject(formObject);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setDeputadoNaoEncontrado(false);

    const nomeDeputado = formObject.deputado;
    const ano = formObject.ano;
    
    if (isFormValid()) {
      setCarregando(true);
      buscaDeputadoInfo(nomeDeputado, ano)
      .then(deputado => {

        setAno(ano);
        setId(deputado.id);
        setDeputado(deputado.nome);
        setImg(deputado.img);
        setPartido(deputado.partido);

        let gastos = deputado.despesas.map((despesa) => {
          if (despesa.ano === Number(ano)) {
            return despesa.valorLiquido;
          }
        });
  
        let totalGastos = somaValores(gastos);
  
        setGastos(parseToCurrency(totalGastos));
      })
      .catch((err) => {
        setDeputadoNaoEncontrado(true);
      })
      .finally(() => {
        setCarregando(false);
      });

    }
  }

  const isPrimeiraBusca = () => {
    return deputado === "";
  }

  const exibeDeputado = () => isPrimeiraBusca() || deputadoNaoEncontrado? 
    deputadoNaoEncontrado? informacaoContentDiv("Deputado não encontrado") : null
    :
    <Card
      img={img}
      deputado={deputado}
      partido={partido}
      ano={ano}
      gastos={gastos}
    />

  const informacaoContentDiv = (texto) => <div
                                style={{ display: 'flex',
                                height: 100,
                                justifyContent: 'center',
                                alignItems: 'center'
                              }}>
                                <h3 style={{ color: 'white' }}>{texto}</h3>
                              </div>

  return (
    <div className="container">
      <div className="logo">
        <h1>FISCALIZA</h1>
        <p>Consulte os gastos dos parlamentares com mandato em andamento</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do deputado"
          name="deputado"
          onChange={handleFormChange}
        />
        <input
          id="number"
          type="number"
          placeholder="Ano"
          name="ano"
          onChange={handleFormChange}
        />
        <button type="submit">Pesquisar</button>
      </form>
      { carregando ? informacaoContentDiv('Carregando...') : exibeDeputado() }
      <footer>
        <p>
          Todos os dados foram retirados da API de Dados Abertos da Câmara dos
          Deputados
        </p>
      </footer>
    </div>
  );
}
