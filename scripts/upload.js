
function redirecionar(){
    history.back();
}
function redirecionar1(){
    window.location.href = "comandos.html";
}
function redirecionar3(){
  window.location.href = "log.html";
}

function verificarArquivo(input) {
    var arquivo = input.files[0];
    var extensao = arquivo.name.split('.').pop();
  
    if (extensao.toLowerCase() !== 'txt') {
      // Se a extensão não for .txt, redireciona para uma página de erro
      window.location.href = 'erro404.html';
    }
  }

  function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      const fileContent = event.target.result;
      // Redirecionar para a página destino
      window.location.href = `log.html?content=${encodeURIComponent(fileContent)}`;
    };
    reader.readAsText(file);
  }
