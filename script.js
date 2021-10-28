localStorage.setItem('filmes', JSON.stringify(filmes));

var nome = JSON.parse(localStorage.getItem('filmes'));


async function pegarDadosUsuario() {
    const usuario = await (await fetch(`https://api.github.com/users/${nome}`)).json()

    console.log(usuario.name);
}

pegarDadosUsuario()