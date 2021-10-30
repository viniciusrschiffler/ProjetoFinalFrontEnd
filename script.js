/*localStorage.setItem('filmes', JSON.stringify(filmes));

var nome = JSON.parse(localStorage.getItem('filmes'));


async function pegarDadosUsuario() {
    const usuario = await (await fetch(`https://api.github.com/users/${nome}`)).json()

    console.log(usuario.name);
}

pegarDadosUsuario()*/
/*function nome(){
    var li=documento.creatElement("name")
    li.textContent=texto;
    ByteLengthQueuingStrategy.appenChild(li);
};
*/

function retornarDadosGit() {
    fetch("https://api.github.com/users/anaclarabull")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var informacaoDesejadaNome = data.name;
            var informacaoDesejadaBio = data.bio;
            var informacaoDesejadaFotoPerfil = data.avatar_url;
            console.log(informacaoDesejadaFotoPerfil);

            var nome = document.getElementById("nome");
            nome.innerHTML = informacaoDesejadaNome;

            var bio = document.getElementById("bio")
            bio.innerHTML = informacaoDesejadaBio;

            var foto = document.getElementsByClassName("foto");
            var img = document.createElement('img');
            img.src = informacaoDesejadaFotoPerfil;


            document.getElementById("foto").appendChild(img)
        });
}

retornarDadosGit()


const carrinhoTeste = [
    {id: 610253, filme: "Halloween Kills: O Terror Continua", valor: 22, tipo: "COMPRA"},
    {id: 580489, filme: "Venom: Tempo de Carnificina", valor: 56, tipo: "ALUGUEL"},
    {id: 566525, filme: "Shang-Chi e a Lenda dos Dez Anéis", valor: 152, tipo: "COMPRA"},
]
var tableContent = document.getElementById("tableContent")
localStorage.setItem("carrinho", JSON.stringify(carrinhoTeste))
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
                  </tr> `
        };
    }
} 

carregarTabela()

