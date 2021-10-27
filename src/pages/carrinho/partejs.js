// var filmes = [
//     {
//         nome: 'miranha',
//         preco: 50.00,
//         tipo: 'compra'
//     },
// ]
// localStorage.setItem('fiilmes', JSON.stringify(filmes));


window.onload = function () {
    // document.getElementById("titulo").innerHTML = "Fogão campeão"

    async function pegarDadosUsuario() {
        var nome = 'viniciusrschiffler'
        //var nome = localStorage.getItem('name');
        const usuario = await (await fetch(`https://api.github.com/users/${nome}`)).json()

        // console.log(usuario.name);

        document.getElementById("titulo").innerHTML = usuario.name;
    }
    pegarDadosUsuario();
}
