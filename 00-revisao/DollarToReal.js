const prompt = require('prompt-sync')();


function main() {
  const dollar = Number(prompt('Digite o valor em doláres: '));
  var real = convertToReal(dollar);
  console.log(`Valor em dolar ${real}`);
};

function convertToReal(dollar) {
  return dollar * 5.25;
};

main();
