// Desafio 1
function compareTrue(t,j) {
  if (t == true && j ==true){
    return true
  } else {
    return false
  }

}
// Desafio 2
function calcArea(base, height) {
    area = (base * height) / 2
    return area
}

// Desafio 3
function splitSentence(tuca) {
  return tuca.split(' ')
}

// Desafio 4

function concatName(junior) {
  let primeiroNome = junior[0];
  let ultimoNome = junior[junior.length - 1];
  return ultimoNome + ', ' + primeiroNome;

  
}

// Desafio 5
function footballPoints(wins, ties) {
let contadorGame = wins * 3 + ties
return contadorGame
}

// Desafio 6
function highestCount(numeros) {
  let maxima = Math.max(...numeros)
  let contador = 0;
  for (let index = 0; index < numeros.length; index +=1){
    if (numeros[index] === maxima){
      contador +=1;
    }

  }
  return contador

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
