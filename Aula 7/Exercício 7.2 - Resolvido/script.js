function verificarAcesso() {
  const input = document.getElementById("inputEntrada");
  const resultado = document.getElementById("resultado");
  const idade = Number(input.value);

  if (idade>=18) {
    resultado.textContent = "Acesso Permitido!";
    resultado.classList.add("permitido");

  } else {
    resultado.textContent = "Acesso Negado: Apenas para maiores de 18 anos.";
    resultado.classList.add("negado");
  }
}