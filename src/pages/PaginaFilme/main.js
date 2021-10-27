var popUp = document.querySelector('.botao1');
popUp.addEventListener("click", () => {

    Swal.fire({
        position: 'top-end',
        title: 'Sucesso\n\nFilme adicionado ao carrinho',   
        showConfirmButton: true,
        timer: 3000
    })
})
var popUpDois = document.querySelector('.botao2');
popUpDois.addEventListener("click", () => {

    Swal.fire({
        position: 'top-end',
        title: 'Sucesso\n\nFilme adicionado ao carrinho',   
        showConfirmButton: true,
        timer: 3000
    })
})