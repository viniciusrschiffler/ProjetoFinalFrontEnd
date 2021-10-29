const TOKEN = '345411636508e2b74308228fcfc87973'
const linguagem = 'pt-BR'

var tops = document.querySelector("#top")
var acaodiv = document.querySelector("#acao")
var animacaodiv = document.querySelector("#anime")

 //async function requisicoes() {
    //const generos = await (await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${TOKEN}&language=${linguagem}`)).json()
    // const videos = await (await fetch(`https://api.themoviedb.org/3/movie/438631/videos?api_key=${TOKEN}&language=${linguagem}`)).json()

    //const generos = await (await fetch( `https://api.themoviedb.org/3/discover/movie?api_key=${TOKEN}&language=${linguagem}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)).json()

   //console.log(generos)
 //}

async function criarcarosel(){
  const populares = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${TOKEN}&language=${linguagem}&page=1`)).json()

  

    populares.results.forEach(filme => {
        tops.innerHTML += `
        <div class="movie-card">
        <img src="https://www.themoviedb.org/t/p/w220_and_h330_face${filme.poster_path}" alt="movie poster" class="movie-poster">
            <div class="movie-info">
                <h1 class="movie-title">${filme.title}</h1>
                <a href="#"><button class="btn-watch" >SAIBA MAIS</button></a>
            </div>
        </div>
        
        `      
    });
} 

async function acaoresult(){
    const acao = await(await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TOKEN}&language=${linguagem}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=28`)).json()

    acao.results.forEach(filme => {
        acaodiv.innerHTML += `
        <div class="movie-card">
        <img src="https://www.themoviedb.org/t/p/w220_and_h330_face${filme.poster_path}" alt="movie poster" class="movie-poster">
            <div class="movie-info">
                <h1 class="movie-title">${filme.title}</h1>
                <a href="#"><button class="btn-watch" >SAIBA MAIS</button></a>
            </div>
        </div>
        
        `      
    });

    
}

async function animeresult(){
    const animacao = await(await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TOKEN}&language=${linguagem}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=16`)).json()

    animacao.results.forEach(filme => {
        animacaodiv.innerHTML += `
        <div class="movie-card">
        <img src="https://www.themoviedb.org/t/p/w220_and_h330_face${filme.poster_path}" alt="movie poster" class="movie-poster">
            <div class="movie-info">
                <h1 class="movie-title">${filme.title}</h1>
                <a href="#"><button class="btn-watch" >SAIBA MAIS</button></a>
            </div>
        </div>
        
        `      
    });

    
}

criarcarosel();
acaoresult();
animeresult();


