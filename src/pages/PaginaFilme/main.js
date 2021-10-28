const TOKEN = '345411636508e2b74308228fcfc87973'

async function requisicoes(){
    const capa = await fetch().json
    const banner = await fetch().json
    const nome = await fetch().json
    const rating = await fetch().json
    const sinopse = await fetch().json
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