// Desafio 1
function compareTrue(valueA, valueB) {
  if (valueA === true && valueB === true) {
    return true
  }
  else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  area = (base*height)/2
  return area
}

// Desafio 3
function splitSentence(str) {
  spl = str.split(' ')
  return spl
}

// Desafio 4
function concatName(myArray) {
  concat = myArray[myArray.length - 1];
  return concat + ', ' + myArray[0] 
}

// Desafio 5
function footballPoints(wins, ties) {
  points = wins * 3 + ties;
  return points
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
