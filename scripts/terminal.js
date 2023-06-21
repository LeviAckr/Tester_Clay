
/*
const terminalDiv = document.getElementById('terminal');

function printMessage(message) {
  terminalDiv.innerHTML += `<p>${message}</p>`;
  terminalDiv.scrollTop = terminalDiv.scrollHeight;
}

function processCommand(command) {
  // Implemente aqui a lógica para processar os comandos do terminal
  if (command === 'hello') {
    printMessage('Olá, mundo!');
  } else if (command === 'date') {
    const currentDate = new Date().toLocaleDateString();
    printMessage(`Data atual: ${currentDate}`);
  } else {
    printMessage(`Comando desconhecido: ${command}`);
  }
}

function handleInput(event) {
  if (event.key === 'Enter') {
    const command = event.target.value;
    event.target.value = '';
    printMessage(`> ${command}`);
    processCommand(command);
  }
}

terminalDiv.innerHTML = '<p>Bem-vindo ao terminal!</p>';
terminalDiv.addEventListener('keydown', handleInput);
terminalDiv.focus();
*/
