// Desafio 1
function compareTrue(value1, value2) {
  let result = false;
  if (value1 === true && value2 === true){
    result = true;
  }
  return result;
}
// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(word) {
  let result = word.split(" ");
  return result;
}

// Desafio 4
function concatName(words) {
  let firstIndex = words[0]
  let lastIndex = words[words.length - 1];
  let result = lastIndex + ", " + firstIndex;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalWinsPoints = wins * 3;
  let result = totalWinsPoints + ties;
  return result;
}

// Desafio 6
function highestCount(numbersArray) {
  let counts = {}
  let highIndex = -Infinity;

  for (number of numbersArray){
    if (highIndex < number){
      highIndex = number;
    }
  }

  for(let i =0; i < numbersArray.length; i++){ 
      if (counts[numbersArray[i]]){
      counts[numbersArray[i]] += 1
      } else {
      counts[numbersArray[i]] = 1
      }
     }
  return counts[highIndex];
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
 let result = '';
 let dist1 = Math.abs(mouse - cat1);
 let dist2 = Math.abs(mouse - cat2);
 if (dist1 < dist2){
   result = 'cat1';
 }else if (dist1 > dist2){
   result = 'cat2';
 }  else{
  result = 'os gatos trombam e o rato foge';
 }
 return result;
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  let fb = "";

  for (i of numbers){
    if (i % 3 !== 0 && i % 5 !== 0){
      fb = "bug!";
    } else if (i % 3 === 0 && i % 5 !== 0){
      fb = "fizz";
    } else if (i % 3 !== 0 && i % 5 === 0){
      fb = "buzz";
    }else{
      fb = "fizzBuzz";
    }
    result.push(fb);
  }
  return result;
}

// Desafio 9
function encode(word) {
  let codes = {
    a:1, e:2, i:3, o:4, u:5
  };
  let result = '';
  for (i of word){
    if (codes[i]){
      result += codes[i];
    } else{
      result += i;
    }
  }
  return result;
}

function decode(word) {
  let codes = {
    1:'a', 2:'e', 3:'i', 4:'o', 5:'u'
  };
  let result = '';
  for (i of word){
    if (codes[i]){
      result += codes[i];
    } else{
      result += i;
    }
  }
  return result;
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
