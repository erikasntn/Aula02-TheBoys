const perguntas = [
  {
    pergunta:
      "Em um local de descobertas, onde a luz queima com precisão, quem manipula o poder com olhos de fogo?",
    crimeLocation: "Laboratório",
    weapon: "Laser dos olhos",
    supe: "Capitão Pátria",
  },
  {
    pergunta:
      "Em uma sala de decisões, um brilho oculto guarda um líquido azul que transforma vidas. Quem é essa estrela?",
    crimeLocation: "Conferência",
    weapon: "Composto V",
    supe: "Luz Estrela",
  },
  {
    pergunta:
      "No coração da organização, onde decisões são explosivas, quem se esconde nas sombras com um toque mortal?",
    crimeLocation: "Escritório",
    weapon: "C4",
    supe: "Black Noir",
  },
  {
    pergunta:
      "Em meio ao arsenal, onde o poder do dinheiro compra a vitória, quem carrega o peso da riqueza?",
    crimeLocation: "Armazém",
    weapon: "Maço de Dinheiro",
    supe: "Maeve",
  },
];

document.addEventListener("DOMContentLoaded" /*carrega documento html*/, () => {
  const perguntaAleatoria = gerarPerguntaAleatoria();
  document.getElementById("pergunta").textContent = perguntaAleatoria.pergunta;
});

function gerarPerguntaAleatoria() {
  const indiceAleatorio = Math.floor(Math.random() * perguntas.length);
  return perguntas[indiceAleatorio];
}

function verificarResposta() {
  const crimeLocation = document.getElementById("crimeLocation").value.trim();
  const weaponInput = document.getElementById("weapon").value.trim();
  const superInput = document.getElementById("supe").value.trim();
  const perguntaAtual = document.getElementById("pergunta").textContent;
  const perguntaObjeto = perguntas.find(
    (perg) => perg.pergunta === perguntaAtual
  );

  if (
    crimeLocation.toLowerCase() ===
      perguntaObjeto.crimeLocation.toLowerCase() &&
    weaponInput.toLowerCase() === perguntaObjeto.weapon.toLowerCase() &&
    superInput.toLowerCase() === perguntaObjeto.supe.toLowerCase()
  ) {
    document.getElementById("resultado").textContent =
      "Correto! O culpado é " + perguntaObjeto.supe + ".";
  } else {
    document.getElementById("resultado").textContent =
      "Resposta errada!";
  }
}
