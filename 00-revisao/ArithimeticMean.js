const prompt = require('prompt-sync')();


function main() {
  const numbers = getNumbers();
  const mean = calcMean(numbers);
  console.log(`Média: ${mean}`);
}


function getNumbers() {
  numbers = new Array;

  var i = 1;
  var actualNumber = Number(prompt(`Digite o ${i}º numero (-1 para encerrar): `));

  while (actualNumber != -1) {
    numbers += actualNumber;
    i += 1;
    var actualNumber = Number(prompt(`Digite o ${i}º numero (-1 para encerrar): `));
  }

  return numbers;
}


function calcMean(numbers) {
  const qtdOfNumbers = numbers.length;
  const sumOfNumbers = sum(numbers);

  return sumOfNumbers / qtdOfNumbers;
}


function sum(numbers) {
  var total = 0;

  for (var i = 0, len = numbers.length; i < len; i++) {
    total += Number(numbers[i]);
  }

  return total;
}


main();
