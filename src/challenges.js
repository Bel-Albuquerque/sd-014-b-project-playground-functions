// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let divisor = [''];
  let counter = 0;
  for (let index = 0; index < sentence.length; index += 1) {
    if (sentence[index] !== ' ') {
      divisor[counter] += sentence[index];
    } else {
      counter += 1;
      divisor[counter] = '';
    }
  }
  return divisor;
}

// Desafio 4
function concatName(names) {
  let concat = names[names.length - 1];
  concat += ', ';
  concat += names[0];
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(insertArray) {
  let maiorValor = insertArray[0];
  let count = 0;
  for (let index of insertArray) {
    if (maiorValor < index) {
      maiorValor = index;
    }
  }
  for (let indexCount of insertArray) {
    if (maiorValor === indexCount) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = Math.abs(mouse - cat1);
  let distanciaGato2 = Math.abs(mouse - cat2);
  let resposta;
  if (distanciaGato1 < distanciaGato2) {
    resposta = 'cat1';
  } else if (distanciaGato1 > distanciaGato2) {
    resposta = 'cat2';
  } else {
    resposta = 'os gatos trombam e o rato foge';
  }
  return resposta;
}

// Desafio 8
function fizzBuzz(numberArray) {
  let fizzBuzzBug = [];
  for (let value of numberArray) {
    if ((value % 3 === 0) && (value % 5 === 0)) {
      fizzBuzzBug.push('fizzBuzz');
    } else if (value % 3 === 0) {
      fizzBuzzBug.push('fizz');
    } else if (value % 5 === 0) {
      fizzBuzzBug.push('buzz');
    } else {
      fizzBuzzBug.push('bug!');
    }
  }
  return fizzBuzzBug;
}
console.log(fizzBuzz([9, 25]));
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
