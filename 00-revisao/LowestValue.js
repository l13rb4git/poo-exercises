const prompt = require('prompt-sync')();


function main() {
  const firstNumber = Number(prompt('Digite o primeiro número: '));
  const secondNumber = Number(prompt('Digite o segundo número: '));
  const thirdNumber = Number(prompt('Digite o terceiro número: '));

  var lowestNumber = firstNumber;
  lowestNumber = lowest(lowestNumber, secondNumber);
  lowestNumber = lowest(lowestNumber, thirdNumber);

  console.log(`Menor: ${lowestNumber}`);
};

function lowest(lowestNumber, anotherNumber) {
  if (lowestNumber < anotherNumber) {
    return lowestNumber;
  } else {
    return anotherNumber;
  }
};

main();
