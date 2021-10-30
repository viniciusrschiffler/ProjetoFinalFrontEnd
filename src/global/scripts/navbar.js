const TOKEN = '345411636508e2b74308228fcfc87973'
const linguagem = 'pt-BR'

localStorage.setItem('githubName', 'viniciusrschiffler') // apenas para teste


// ******************* MUDANDO FOTO PERFIL ***********************

const imagemDePerfil = document.querySelector('#foto-perfil > img');

const dadosUsuario = JSON.parse(localStorage.getItem('usuarioFiFi'))
imagemDePerfil.setAttribute('src', dadosUsuario.avatar_url)


// ******************* BOTÃO DE SAIR ***********************

const botaoSair = document.querySelector('#sair');

botaoSair.addEventListener('click', () => {
    localStorage.clear()
})


// ******************* CREIANDO GENEROS ***********************

const generosUl = document.querySelector('#genero-subItens > ul');
const NUMERO_GENEROS = 5;

async function criarGeneros() {
    let resposta = await (await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${TOKEN}&language=${linguagem}`)).json()
    let generos = resposta.genres
    
    for (let i = 0; i < NUMERO_GENEROS; i++) {
        generosUl.innerHTML += `
            <li><a id-genero="${generos[i].id}" href="#">${generos[i].name}</a></li>
        `
    }
    
    generosUl.innerHTML += `
    <li id="li-mais">
        <a href="#">Mais</a>
        <svg width="34" height="34" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 12.75L17 21.25L25.5 12.75" stroke="white" stroke-width="5.41667"
                stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </li>
    `
}

criarGeneros()


// ******************* PROCURAR FILMES ***********************

async function procurarFilme(texto) {

    let resposta = await (await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TOKEN}&language=${linguagem}&page=1&include_adult=true&query=${texto}`)).json()
    console.log(resposta)
}

const inputProcurar = document.querySelector('#input-container > input')
const botaoProcurar = document.querySelector('#input-container > svg')

inputProcurar.addEventListener('keyup', e => {
    // "e" é o evento dsiparado
    //keyCode = 13 é o código da tecla enter
    if (e.keyCode === 13) {
        procurarFilme(inputProcurar.value)
    }
})

botaoProcurar.addEventListener('click', () => procurarFilme(inputProcurar.value))