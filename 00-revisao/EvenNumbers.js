const prompt = require('prompt-sync')();


function main() {
  const numbers = getNumbers();
  var totalEven = 0;

  for (var i = 0, len = numbers.length; i < len; i++) {
    if (numbers[i] % 2 == 0) {
      totalEven += 1;
    }
  }

  console.log("Quantidade de numeros pares: ", totalEven);
}


function getNumbers() {
  numbers = new Array;

  var i = 1;

  while (i <= 20) {
    numbers += Number(prompt(`Digite o ${i}º numero: `));
    i += 1;
  }

  return numbers;
}

main();
