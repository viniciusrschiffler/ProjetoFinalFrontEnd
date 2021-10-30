async function pegarDadosUsuario(nome) {
  // Consome a API do Github a partir do nome de usuário recebido
  const dados = await fetch(`https://api.github.com/users/${nome}`);
  const usuario = await dados.json();

  return { 'status': dados.status, 'dados': usuario };
};


document.getElementById("botaoAcessar").onclick = function (event) {
  event.preventDefault();
  var nomeUsuario = document.getElementById("nomeUsuario").value;

  if (!nomeUsuario.length) {
    alert("Preencha o nome de usuário Github");
    return;
  }

  pegarDadosUsuario(nomeUsuario).then(resultado => {
    // Verifica o status da resposta da API. Caso seja 404, significa que o usuário consultado não existe.
    if (resultado.status == 404) {
      alert("Preencha um nome de usuário válido do Github.");
      return;
    };

    if (resultado.status == 200) {
      // Armazena o retorno da API no localStorage como um array, facilitando o consumo de qualquer informação do usuário em outras páginas.
      localStorage.setItem('usuarioFiFi', JSON.stringify(resultado.dados));
      
      window.location.href = "./src/pages/home"; // colocar a URL da página após o login
      return;
    };
  })
};
