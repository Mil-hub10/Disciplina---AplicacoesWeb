function processarJSON() {
  const jsonTexto = document.getElementById("jsonInput").value;
  const output = document.getElementById("output");

  try {
    // Converte a string 'jsonTexto' em um Objeto/Array JavaScript utilizando JSON.parse()
    const dados = JSON.parse(jsonTexto);

    // Limpa o output
    output.textContent = "";

    // Verifica se 'dados' é um Array e exibe o nome de cada item no elemento 'output'
    if (Array.isArray(dados)) {
      dados.forEach(item => {
        output.textContent += item.nome + "\n";
      });
    } else {
      output.textContent = "O JSON informado não é uma lista (array).";
    }

  } catch (erro) {
    output.textContent = "Erro: O formato inserido não é um JSON válido!";
  }
}

function exportarNovoJSON() {
  const output = document.getElementById("output");

  // Objeto JS de exemplo
  const novoProduto = {
    id: 101,
    nome: "Monitor Gamer 144Hz",
    categoria: "Eletrônicos",
    emEstoque: true
  };

  // Converte o objeto 'novoProduto' para uma string JSON formatada utilizando JSON.stringify()
  const jsonFormatado = JSON.stringify(novoProduto, null, 2);

  // Exibe na tela
  output.textContent = jsonFormatado;
}
