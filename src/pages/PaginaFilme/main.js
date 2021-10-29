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
       
        function ComprarFilme(){
            var comprarButton = document.getElementsByClassName("botao1")[0]
            comprarButton.addEventListener('click', ()=>{
                setFilme("COMPRA")
            })

        }
        var carrinho = JSON.parse(localStorage.getItem("carrinho")) || []
        
        function alugarFilme(){
            
            var alugarButton = document.getElementsByClassName("botao2")[0]
            alugarButton.addEventListener('click', ()=>{
                setFilme("ALUGUEL")
            })
        }
        function setFilme(tipo, botao){
                carrinho.push({
                    id: dados.id,
                    filme: dados.title,
                    valor: preco,
                    tipo: tipo
                })
                console.log("oi")
                localStorage.setItem("carrinho", JSON.stringify(carrinho))
        } 
        alugarFilme()
        ComprarFilme() 
    }
    
requisicoes();



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