import axios from 'axios';

const API_URL = 'https://dadosabertos.camara.leg.br/api/v2/deputados';

const api = axios.create({
    baseURL: API_URL
})

export const buscaDeputadoInfo = async (nome, ano) => {
    const deputadoRequest = await api.get(`?nome=${nome}`);
    
    if(!deputadoRequest.data.dados){
        return Promise.reject('Deputado não existe');
    }

    const deputado = deputadoRequest.data.dados[0];

    const despesas = await api.get(
        `/${deputado.id}/despesas?ano=${ano}&ordem=ASC&ordenarPor=ano`
    );
    
    const listaDados = despesas.data.dados;
    
    let deputadoInfo = {
        id: deputado.id,
        nome: deputado.nome,
        img: deputado.urlFoto,
        partido: deputado.siglaPartido, 
        despesas: listaDados
    }

    
    return deputadoInfo;
}

export default api;
