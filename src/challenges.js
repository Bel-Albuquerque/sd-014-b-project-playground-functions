// Desafio 1
function compareTrue(booleanOne, booleanTwo) {
  if (booleanOne === true && booleanTwo === false)
    return true
    else
    return false;
}

// Desafio 2
function calcArea(base , height) {
  return (base*height / 2);
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3 + ties);
}

// Desafio 6
function highestCount(arrayNumbers) {
  let highestValue = arrayNumbers[0];
  let countHighestValue = 0;

  for (let index = 1 ; index < arrayNumbers.length - 1; index += 1) {
    if (highestValue < arrayNumbers[index]) {
      highestValue = arrayNumbers[index];
    }
  }

  for (let index = 0 ; index < arrayNumbers.length - 1 ; index += 1) {
    if (highestValue == arrayNumbers[index]) {
      countHighestValue += 1;
    }
  }

  return countHighestValue;
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
