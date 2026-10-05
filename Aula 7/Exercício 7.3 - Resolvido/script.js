// Array inicial de tarefas
const tarefas = ["Estudar JavaScript", "Fazer os exercícios", "Comprar café", "Revisar o código"];

function renderizarTarefas() {
  const listaEl = document.getElementById("listaTarefas");
  listaEl.innerHTML = ""; // Limpa a lista antes de renderizar

  tarefas.forEach(tarefa => {
    const li = document.createElement("li"); // Cria um novo elemento 'li'
    li.textContent = tarefa; // Define o texto do 'li' com a tarefa atual
    listaEl.appendChild(li); // Adiciona o 'li' dentro de 'listaEl'
  });
}

// Executa a função ao carregar a página
renderizarTarefas();