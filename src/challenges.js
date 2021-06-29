// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = ((base * height) / 2);
  return areaTriangulo;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  stringDividida = string.split(" ");
  return stringDividida;
}
console.log(splitSentence("go Trybe"));
console.log(splitSentence("vamo que vamo"));
console.log(splitSentence("foguete"));

// Desafio 4
function concatName(array) {
  let lastArray = array[array.length - 1];
  let firstArray = array[0];
  return lastArray + ", " + firstArray;
}
console.log(concatName(["Lucas", "Cassiano", "Ferraz", "Paolillo"]));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(numbers) {
  maior = 0;
  numeroDeVezes = 0;
  for (let indice in numbers) {
    if (maior < numbers[indice]) {
        maior = numbers[indice];
    }
  }
    for (let indice in numbers) { 
      if (maior === numbers[indice]) {
      numeroDeVezes++;
      }  
  } 
return numeroDeVezes;  
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 <= mouse && cat1 > cat2){
    return "cat1"
  } else if (cat2 <= mouse && cat2 > cat1) {
    return "cat2"
  } else if (cat1 === cat2 && cat2 === cat1) {
    return "os gatos se trombam e o rato foge";
  }
}
console.log(catAndMouse(10, 7, 8));
console.log(catAndMouse(14, 8, 2));
console.log(catAndMouse(20, 15, 15));

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
