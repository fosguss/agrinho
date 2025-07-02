let perguntas = [
  {
    pergunta: "Qual é a principal contribuição do campo para a cidade?",
    opcoes: ["Entretenimento", "Alimentos e matérias-primas", "Poluição", "Indústrias"],
    correta: 1
  },
  {
    pergunta: "O que é agricultura sustentável?",
    opcoes: ["Plantar tudo de uma vez", "Usar o solo sem pensar no futuro", "Respeitar o meio ambiente", "Usar muitos agrotóxicos"],
    correta: 2
  },
  {
    pergunta: "Qual a relação entre o campo e a cidade?",
    opcoes: ["A cidade fornece comida", "Campo depende da cidade", "Cidade depende do campo", "Não existe relação"],
    correta: 2
  },
  {
    pergunta: "Quem produz os alimentos que chegam à cidade?",
    opcoes: ["A indústria", "O agricultor", "O supermercado", "O governo"],
    correta: 1
  },
  {
    pergunta: "Por que preservar o meio ambiente é importante no campo?",
    opcoes: ["Para construir mais casas", "Para usar mais agrotóxicos", "Para garantir produção futura", "Para desmatar florestas"],
    correta: 2
  }
];

let tela = "inicio";
let perguntaAtual = 0;
let pontuacao = 0;
let botaoReiniciar = false;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(200, 255, 200);

  if (tela === "inicio") {
    mostrarInicio();
  } else if (tela === "quiz") {
    mostrarPergunta();
  } else if (tela === "fim") {
    mostrarFim();
  }
}

function mostrarInicio() {
  textSize(32);
  fill(0);
  text("Quiz: Do Campo à Cidade", width / 2, height / 3);
  textSize(20);
  text("Clique para começar", width / 2, height / 2);
}

function mostrarPergunta() {
  let q = perguntas[perguntaAtual];
  textSize(22);
  fill(0);
  text(q.pergunta, width / 2, 60);

  for (let i = 0; i < q.opcoes.length; i++) {
    fill(255);
    rect(150, 100 + i * 60, 300, 40, 10);
    fill(0);
    text(q.opcoes[i], 300, 120 + i * 60);
  }
}

function mostrarFim() {
  textSize(28);
  fill(0);
  text("Quiz finalizado!", width / 2, 80);
  textSize(22);
  text("Sua pontuação: " + pontuacao + "/" + perguntas.length, width / 2, 140);

  if (pontuacao < 3) {
    textSize(20);
    text("Você pode tentar novamente!", width / 2, 200);
    fill(255);
    rect(220, 250, 160, 40, 10);
    fill(0);
    text("Jogar novamente", 300, 270);
    botaoReiniciar = true;
  } else {
    textSize(20);
    text("Parabéns! Você entende bem a relação entre campo e cidade!", width / 2, 220);
    botaoReiniciar = false;
  }
}

function mousePressed() {
  if (tela === "inicio") {
    tela = "quiz";
  }

  if (tela === "fim" && botaoReiniciar) {
    if (mouseX > 220 && mouseX < 380 && mouseY > 250 && mouseY < 290) {
      pontuacao = 0;
      perguntaAtual = 0;
      tela = "quiz";
    }
  }
}

function mouseClicked() {
  if (tela === "quiz") {
    let q = perguntas[perguntaAtual];
    for (let i = 0; i < q.opcoes.length; i++) {
      if (mouseX > 150 && mouseX < 450 && mouseY > 100 + i * 60 && mouseY < 140 + i * 60) {
        if (i === q.correta) {
          pontuacao++;
        }
        perguntaAtual++;
        if (perguntaAtual >= perguntas.length) {
          tela = "fim";
        }
        break;
      }
    }
  }
}
