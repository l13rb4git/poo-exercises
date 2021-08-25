const prompt = require('prompt-sync')();


function main() {
  const s = prompt("Digite a string: ");

  var newString = "";

  for (var i = 0, len = s.length; i < len; i++) {
    if (!isVowel(s[i])) {
      newString += s[i];
    } 
  }

  console.log(newString);
}


function isVowel(c) {
  return (/^[aeiou]$/i).test(c);
}


main();
