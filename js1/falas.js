// Opções que o usuário pode digitar
const prompts = [
  ["Oi", "oi", "ola", "bom dia", "boa tarde"],
  ["como vai voce", "como vai a vida", "como vao as coisas"],
  ["o que você esta fazendo", "o que está acontecendo", "o que está acontecendo"],
  ["Quantos anos você tem"],
  ["quem é você", "você é humano", "é você bot", "você é humano ou bot"],
  ["quem te criou", "quem te fez"],
  [
    "seu nome por favor",
    "seu nome",
    "posso saber o seu nome",
    "Qual o seu nome",
    "como se chama"
  ],
  ["Eu amo Você"],
  ["feliz", "bom", "divertido", "maravilhoso", "fantástico", "legal"],
  ["ruim", "entediado", "cansado"],
  ["me ajude", "conte uma história", "conte uma piada"],
  ["ah", "sim", "ok", "ok", "legal"],
  ["tchau", "tchau", "tchau", "até logo"],
  ["o que devo comer hoje"],
  ["Mano"],
  ["o quê", "por que", "como", "onde", "quando"],
  ["não", "não tenho certeza", "talvez", "não, obrigado"],
  [""],
  ["haha", "ha", "lol", "hehe", "engraçado", "piada"]
]


// Respostas possíveis, na ordem correspondente

const replies = [
  ["Olá!", "Olá!", "Ei!", "Olá!", "Olá"],
  [
    "Bem e voce?",
    "Muito bem, como vai você?",
    "Fantástico, como você está?"
  ],
  [
    "Praticamente nada",
    "Prestes a dormir",
    "Você consegue adivinhar?",
    "Na verdade eu não sei"
  ],
  ["Eu sou infinito"],
  ["Sou apenas um bot", "Sou um bot. O que é você?"],
  ["O único Deus verdadeiro, JavaScript"],
  ["Não tenho nome", "não tenho nome"],
  ["Eu também te amo", "Eu também"],
  ["Você já se sentiu mal?", "Fico feliz em ouvir isso"],
  ["Por quê?", "Por quê? Você não deveria!", "Tente assistir TV"],
  ["Sobre o quê?", "Era uma vez ..."],
  ["Conte-me uma história", "Conte-me uma piada", "Conte-me sobre você"],
  ["Tchau", "Adeus", "Te vejo mais tarde"],
  ["Sushi", "Pizza"],
  ["Mano!"],
  ["Ótima pergunta"],
  ["Tudo bem", "Eu entendo", "Sobre o que você quer falar?"],
  ["Por favor, diga alguma coisa :("],
  ["Haha!", "Boa!"]
]

// Aleatório para qualquer outra entrada do usuário

const alternative = [
  "Mesmo",
  "Prossiga...",
  "Mano...",
  "Tente novamente",
  "Estou ouvindo...",
  "Não entendo :/"
]

// O que mais eu quiser :)

const coronavirus = ["Por favor, fique em casa", "Use uma máscara", "Felizmente, não tenho COVID", "Estes são tempos incertos"]
