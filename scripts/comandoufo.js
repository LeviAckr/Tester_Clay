function verificarTexto() {
    var textoInput = document.getElementById("dig").value;
    var mensagemTexto = document.getElementById("mensagem-texto");
  
    if (textoInput === "ram") {
        if (performance && performance.memory) {
          var memory = performance.memory;
          var mm = Math.random();
            mensagemTexto.innerHTML = "Uso de memória total:" + mm;
            mensagemTexto.style.color = "green";
            
          }
    } 
    else if (textoInput === "osiris"){
      for (var i = 0; i < 1; i++) {
        mensagemTexto.innerHTML = "lobo da sorte";
      }
      mensagemTexto.style.color = "green";
    }
    
    // Variável para armazenar os relatórios
var relatorios = [];

// Função para criar um novo relatório
function criarRelatorio() {
  var user = prompt("Adicione o nome do usuário");
  var id = prompt("Adicione o ID");
  var motivo = prompt("Digite o motivo do report");
  
  var relatorio = {
    user: user,
    id: id,
    motivo: motivo
  };
  
  relatorios.push(relatorio);
  
  alert("Report Criado!");
  
  mensagemTexto.innerHTML = "Usuário: " + user  + " <br> ID: " + id +  " <br> Motivo: " + motivo;
  mensagemTexto.style.color = "green";
}

// Função para checar se um relatório existe com base no ID do usuário
function checarRelatorio() {
  var id = prompt("Adicione o ID de usuário");
  
  var relatorioEncontrado = relatorios.find(function(relatorio) {
    return relatorio.id === id;
  });
  
  if (relatorioEncontrado) {
    mensagemTexto.innerHTML = "Relatório encontrado para o ID " + id;
    mensagemTexto.style.color = "green";
  } else {
    mensagemTexto.innerHTML = "Nenhum relatório encontrado para o ID " + id;
    mensagemTexto.style.color = "red";
  }
}

// Bloco de código atualizado
if (textoInput === "reportCreate") {
  criarRelatorio();
} else if (textoInput === "checkReport") {
  checarRelatorio();
}


//log apartir de um servidor(discord
else if (textoInput === "serv") {
  function carregarJSON() {
    fetch('../../bds/serv_list.json')
      .then(response => response.json())
      .then(data => {
        exibirElementos(data);
      })
      .catch(error => console.error(error));
  }
  
  // Função para exibir os elementos do JSON
  function exibirElementos(json) {
    for (var chave in json) {
      if (json.hasOwnProperty(chave)) {
        console.log(chave + ": " + json[chave]);
      }
    }
  }

  var svss = [
    "Csj <br>",
    "Discloud<br>",
    "MainsRish<br>",
    "DevLandia<br>",
    "Bolha DevBR<br>"

  ]
  carregarJSON();
  mensagemTexto.innerHTML = `Compatbilidade com, ${svss}`;
  mensagemTexto.style.color = "green";

  const {svs} = require("../../bds/serv_list.json");
}

    
    else {
      mensagemTexto.innerHTML = "<p>Comando não encontrado!</p>";
      mensagemTexto.style.color = "red";
    }
  }


  

