const prompt = require('prompt-sync')();


function main() {
  const vector = getNumbers();
  console.log("Elementos do vetor: ", vector);
}


function getNumbers() {
  numbers = new Array;

  var i = 1;

  while (i <= 5) {
    numbers += Number(prompt(`Digite o ${i}º numero: `));
    i += 1;
  }

  return numbers;
}

main();
