document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});

function output(input) {
  let product;

  // Regex remove caracteres sem palavra / espaço
  // Cortar o whitespce à direita
  // Remover dígitos - não tenho certeza se este é o melhor
  // Mas resolve o problema de inserir algo como 'oi1'

  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/eu sinto /g, "")
    .replace(/o que há/g, "o que é")
    .replace(/por favor /g, "")
    .replace(/ por favor/g, "")
    .replace(/vc /g, "voce");

  if (compare(prompts, replies, text)) {
    // Procure por correspondência exata em `prompts`
    product = compare(prompts, replies, text);
  } else if (text.match(/obrigado/gi)) {
    product = "De nada!";
  } else if (text.match(/(corona|covid|virus)/gi)) {
    // Se não houver correspondência, verifique se a mensagem contém `coronavirus`
    product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
  } else {
    //Se tudo mais falhar: alternativa aleatória
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  // Update DOM
  addChat(input, product);
}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        // Pare o loop interno quando o valor de entrada corresponder aos prompts
        break;
      }
    }
    if (replyFound) {
      // Pare o loop externo quando a resposta for encontrada, em vez de interagir com toda a matriz
      break;
    }
  }
  return reply;
}

function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="img/user.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "img/bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Escrevendo...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  // Mantenha as mensagens mais recentes
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    botText.innerText = `${product}`;
  }, 2000
  )
}
