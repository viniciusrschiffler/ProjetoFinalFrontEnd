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