const prompt = require('prompt-sync')();


function main() {
  const s = prompt("Digite a string: ");
  const a = prompt("Digite o caracter A: ");
  const b = prompt("Digite o caracter B: ");

  var newString = "";

  for (var i = 0, len = s.length; i < len; i++) {
    if (s[i] == a) {
      newString += b;
    } else {
      newString += s[i];
    }
  }

  console.log(newString);
}


main();
