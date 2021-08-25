const prompt = require('prompt-sync')();


function main() {
  const n = Number(prompt('Digite: '));
  console.log(`Antecessor: ${n - 1}`);
  console.log(`Sucessor: ${n + 1}`);
}

main();
