const prompt = require('prompt-sync')();

const monthNames = [ 'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro' ]

function main() {
  const numberOfMonth = Number(prompt('Digite o número do mês: '));

  if (numberOfMonth >= 1 && numberOfMonth <= 12) {
    console.log(`${monthNames[numberOfMonth - 1]}`);
  } else {
    console.log("Numero incorreto");
  }
};

main();
