// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentece) {
  return sentece.split(' ');
 
} // outro jeito de dividir as palavras fonte: w3shools

// Desafio 4
function concatName(stringArray) {
  let firstName = stringArray[0];
  let lastName = stringArray[stringArray.length - 1];
  return `${lastName}, ${firstName}`;
} // outro jeito de concatenar as palavras fonte: w3shools


// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function highestCount(numbers) {
  let countNumber = 0;
  let hightnumber = numbers[0];
  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > hightnumber) {
      hightnumber = numbers[index];
    }
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (hightnumber === numbers[index]) {
      countNumber += 1;
    }
  }
  return countNumber;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }
  else if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  else {
    return 'os gatos trombam e o rato foge';
  }
} //W3schools

// Desafio 8
function fizzBuzz(arrayOfnumbers) {
  let array = [];
  for (let index = 0; index < arrayOfnumbers.length; index += 1) {
    if (arrayOfnumbers[index] % 3 === 0 && arrayOfnumbers[index] % 5 === 0) {
      array.push('fizzBuzz');
    }
    else if (arrayOfnumbers[index] % 3 === 0) {
      array.push('fizz');
    }
    else if (arrayOfnumbers[index] % 5 === 0) {
      array.push('buzz');
    }
    else if (arrayOfnumbers[index] % 3 !== 0) {
      array.push('bug!');
    }
    else if (arrayOfnumbers[index] % 5 !== 0) {
      array.push('bug!');
    }
  }
  return array;
}

// Desafio 9
//use for of
function encode(encodeString) {
  let stringWithNumber = ''
  for (let newString of encodeString) {
    if (newString === 'a') {
      newString = '1';
      stringWithNumber += newString;
    }
    else if (newString === 'e') {
      newString = '2';
      stringWithNumber += newString;
    }
    else if (newString === 'i') {
      newString = '3';
      stringWithNumber += newString;
    }
    else if (newString === 'o') {
      newString = '4';
      stringWithNumber += newString;
    }
    else if (newString === 'u') {
      newString = '5';
      stringWithNumber += newString;
    }
    else {
      stringWithNumber += newString;
    }
  }
  return stringWithNumber;
}
function decode(decodeString) {
  let string1 = '';
  for (let newString1 of decodeString) {
    if (newString1 === '1') {
      newString1 = 'a';
      string1 += newString1;
    }
    else if (newString1 === '2') {
      newString1 = 'e';
      string1 += newString1;
    }
    else if (newString1 === '3') {
      newString1 = 'i';
      string1 += newString1;
    }
    else if (newString1 === '4') {
      newString1 = 'o';
      string1 += newString1;
    }
    else if (newString1 === '5') {
      newString1 = 'u';
      string1 += newString1;
    }
    else {
      string1 += newString1;
    }
  }
  return string1;
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
