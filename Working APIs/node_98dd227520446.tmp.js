const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question('Sua pergunta: ', (resposta) => {
  console.log(`Você disse: ${resposta}`);
  readline.close();
});