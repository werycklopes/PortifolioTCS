function contacto(){
  var nome= document.getElementById('nome');
  var telefone= document.getElementById('telefone');
  var email= document.getElementById('email');
  var sim= document.getElementById('sim');
  var mensagem= document.getElementById('mensagem');

  var dados= JSON.parse(localStorage.getItem("dadoscontacto"));

  if(dados== null){
    localStorage.setItem("dadoscontacto", "[]");
    dados= "[]";
  }

  var auxiliar ={
    nome: nome.value,
    telefone: telefone.value,
    email: email.value,
    sim: sim.value,
    mensagem: mensagem.value
  }
  dados.push(auxiliar);

  localStorage.setItem("dadoscontacto", JSON.stringify(dados));
  alert("Mensagem enviada com sucesso");

  nome.value= "";
  telefone.value= "";
  email.value= "";
  mensagem.value= "";
}
