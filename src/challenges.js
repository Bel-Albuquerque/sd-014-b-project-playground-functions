// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
}   return false;
}

// Desafio 2
function calcArea(base, altura) {
  let areaTriangulo = (base * altura) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let resultado = string.split('');
  return resultado;
}

// Desafio 4
function concatName(array) {
  let concat = array[array.length - 1] + ',' + '' + array[0];
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = 3 * wins;
  let tiePoints = ties;
  let totalPoints = winPoints + tiePoints;
  return totalPoints;
}

// Desafio 6
function highestCount(array) {
  let highNumber = array[1];
  let numberCount = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highNumber) {
      highNumber = array[index];
    } 
    // return highNumber;
  } 
  for (let secondIndex = 0; secondIndex < array.length; secondIndex +=1) {
    if (highNumber === array[index]) {
      numberCount += 1;
    } 
    // return numberCount;
  } 
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  mouse;
  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1 < cat2) {
    return 'cat1';
  } (cat1 > cat2)
    return 'cat2';
  }
 
// Desafio 8
function fizzBuzz(array) {
  for (let index = 0; index < array.length; index += 1){
  if ((array[index] % 3 === 0)){
  return "fizz";
  } else if ((array[index] % 5 === 0)){
    return "buzz";
  } if ((number % 3 === 0) && (array[index] % 5 === 0)){
      return "fizzBuzz";
  } else {
      return "bug!";
    }    
  } 
   } 



// Desafio 9
function encode(string) {
 
  
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
