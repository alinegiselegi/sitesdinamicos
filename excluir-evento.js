const urlBase = "https://xp41-soundgarden-api.herokuapp.com/events/";

// Pegando os Inputs do Html
const inputDeNome = document.getElementById('nome');
const inputDeBanner = document.getElementById('banner');
const inputDeAtracoes = document.getElementById('atracoes');
const inputDeDescricao = document.getElementById('descricao');
const inputDeData = document.getElementById('data');
const inputDeLotacao = document.getElementById('lotacao');

// Peguei o ID da URL
const idCortado = window.location.toString().   ('id=');
console.log(idCortado);
const id = idCortado[1];

// Pegando informação da API
async function pegarInfos() {
    const bruto = await fetch(urlBase + id);
    const resposta = await bruto.json();
    console.log(resposta)
    
    inputDeNome.value = resposta.name;
    inputDeBanner.value = resposta.poster;

    // ['Banda 01', 'Banda 02' , 'Banda 03']
    // "Banda01, Banda 02, Banda 03"
    inputDeAtracoes.value = resposta.attractions.join(',');
    inputDeDescricao.value = resposta.description;

    const data = new Date(resposta.scheduled);
    inputDeData.value = data.toLocaleString();

    inputDeLotacao.value = resposta.number_tickets;
}

pegarInfos();