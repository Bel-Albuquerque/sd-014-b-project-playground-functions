// Desafio 1
function compareTrue(valueA , valueB) {
  let resultado;
  if(valueA === true && valueB === true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base , height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(frases) {
  return (frases.split(" "));
}

// Desafio 4
function concatName(nomes) { 
  return nomes[nomes.length -1] + ', ' + nomes[0];
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
