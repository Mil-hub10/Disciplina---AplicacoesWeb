function atualizarPerfil() {
  const nome = "Milena Santana";
  const idade = 26 ;
  const bio = "Nasci em SP. Sou formada em Radiologia, e agora estou estudando tecnologia, pois desejo trabalhar com tecnologia na área da saúde.";

  document.getElementById("nome").textContent = nome;
  document.getElementById("idade").textContent = "Idade: " + idade;
  document.getElementById("biografia").textContent = bio;

}