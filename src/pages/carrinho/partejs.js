var compras = [
    {
        id: 01,
        filme: 'miranha',
        valor: 50.00,
        tipo: 'compra'
    },
    {
        id: 02,
        filme: 'miranha 2',
        valor: 80.00,
        tipo: 'aluguel'
    },
    {
        id: 03,
        filme: 'Titanic',
        valor: 20.00,
        tipo: 'compra'
    }]
const comprasjson = JSON.stringify(compras)
localStorage.setItem('carrinho', comprasjson)
var limp = document.querySelector("#limp");
limp.addEventListener('click', () => {
    limpar();
})

var botao = document.querySelector("#comprar");
botao.addEventListener('click', (evento) => {
    evento.preventDefault();
    limpar();
    botao.innerHTML = "COMPRAR : R$ 0";
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
                    <td><img src= "D:img/minus.svg" alt="excluir" class="imagemmenos" onclick="removerlinha(${item[i].id})"></td>
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

