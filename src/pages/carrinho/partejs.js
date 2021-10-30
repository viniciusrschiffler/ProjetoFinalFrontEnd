
var limp = document.querySelector("#limp");
limp.addEventListener('click', () => {
    limpar();
})



const nomeDiv = document.querySelector("#titulo");
nomeDiv.innerHTML = dadosUsuario.name;

var botao = document.querySelector("#comprar");
botao.addEventListener('click', (evento) => {
    evento.preventDefault();
    limpar();
    botao.innerHTML = "COMPRAR : R$ 0";

    Swal.fire({
        icon: 'success',
        position: 'center',
        title: 'Filmes comprados com sucesso!',
        showConfirmButton: true,
        timer: 3000,
    })
})

function criarbotao() {
    var valortotal = 0;
    var itemjson = localStorage.getItem('carrinho');
    if (itemjson != "") {
        var item = JSON.parse(itemjson);
        for (var i = 0; i < item.length; i++) {
            valortotal += item[i].valor
        };
    }
    botao.innerHTML = `COMPRAR : R$${valortotal} `
}
var tableContent = document.getElementById("content");

function carregarTabela() {
    var itemjson = localStorage.getItem('carrinho');
    if (itemjson != "") {
        var item = JSON.parse(itemjson);
        for (var i = 0; i < item.length; i++) {
            tableContent.innerHTML += ` <tr>
                    <td>${i + 1}</td>
                    <td>${item[i].filme}</td>
                    <td>${item[i].valor}</td>
                    <td>${item[i].tipo}</td>
                    <td><img src= "../../images/minus.svg" alt="excluir" class="imagemmenos" onclick="removerlinha(${item[i].id})"></td>
                  </tr> `
        };
    }
}


function limpar() {
    localStorage.setItem('carrinho', "")
    tableContent.innerHTML = "";
    criarbotao();
}
carregarTabela();
criarbotao();

function removerlinha(id) {
    var itemjson = localStorage.getItem('carrinho');
    if (itemjson != "") {
        var item = JSON.parse(itemjson);
        var indiceitem
        item.forEach((cadaitem, index) => {
            if (cadaitem.id == id) {
                indiceitem = index
            }
        })
        item.splice(indiceitem, 1);
        console.log(item);
        localStorage.setItem('carrinho', JSON.stringify(item));
        tableContent.innerHTML = "";
        carregarTabela();
        criarbotao();

    }
}