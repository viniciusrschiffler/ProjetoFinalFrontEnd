/*==============================Requisição e uso da API==============================*/
const TOKEN = '345411636508e2b74308228fcfc87973'

async function requisicoes(){
    var filme = 541;
    const dados = await (await fetch(`https://api.themoviedb.org/3/movie/${filme}?api_key=${TOKEN}`)).json();
    var preco = dados.budget * 0.000001 + 2;
    
        document.getElementById("tituloFilme").innerHTML = dados.title;
        document.getElementById("rating").innerHTML = dados.vote_average;
        document.getElementById("sinopseTitulo").innerHTML = dados.overview;
        document.querySelector("#capaFilme > img").setAttribute("src", `https://www.themoviedb.org/t/p/w220_and_h330_face${dados.poster_path}`)
        document.querySelector("#background > img").setAttribute("src", `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${dados.backdrop_path}`)
        document.getElementById("botaoComprarTexto").innerHTML = ("R$ " + preco);
        
        
    }
requisicoes();

function ComprarFilme(){

    var comprarButton = document.getElementById("#botaoComprarTexto")

    function setFilme(){
        comprarButton.addEventListener('click', ()=>{
            localStorage.setItem('Nome', filme)
            localStorage.setItem('Tipo', "COMPRAR")
            localStorage.setItem('Preço', "R$" + preco)
        })
    }
}
function alugarFilme(){

    var alugarButton = document.getElementById("#botaoAlugarTexto")

    function setFilme(){
        alugarButton.addEventListener('click', ()=>{
            localStorage.setItem('Nome', filme)
            localStorage.setItem('Tipo', "ALUGUEL")
            localStorage.setItem('Preço', "R$" + preco)
        })
    }
}

var popUps = document.querySelectorAll('.botoes');

popUps.forEach(popUp =>{
    popUp.addEventListener("click", () => {

        Swal.fire({
            icon: 'success',
            position: 'top-end',
            title: 'Filme adicionado ao carrinho',   
            showConfirmButton: true,
            timer: 3000,
        })
    })
})
function mudarTitulo(nomeFilme){
    document.title = document.getElementById("tituloFilme").innerHTML;
}