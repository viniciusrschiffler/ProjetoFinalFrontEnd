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

    var informacaoDesejadaNome = dadosUsuario.name;
    var informacaoDesejadaBio = dadosUsuario.bio;
    var informacaoDesejadaFotoPerfil = dadosUsuario.avatar_url;

    var nome = document.getElementById("nome");
    nome.innerHTML = informacaoDesejadaNome;

    var bio = document.getElementById("bio")
    bio.innerHTML = informacaoDesejadaBio;

    var foto = document.getElementsByClassName("foto");
    var img = document.createElement('img');
    img.src = informacaoDesejadaFotoPerfil;


    document.getElementById("foto").appendChild(img)
}

retornarDadosGit()



var tableContent = document.getElementById("tableContent")

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