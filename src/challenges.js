// Desafio 1
function compareTrue(param1,param2) {
  if (param1 === true && param2 === true){
    return true;
  } else {
    return false;
  }
}


// Desafio 2
function calcArea(base,height) {
  area = (base*height)/2;
  return area;
}


// Desafio 3
function splitSentence(str) {
  let armazenaStr = "";
  let espaco = " ";
  for (index=0;index<str.length;index+=1){
    if (str[index] != espaco){
      
    }
  }

}



// Desafio 4
function concatName(array) {
  let name1 = array[array.length-1];
  let name2 = array[0];
  let namesummed = name1 + ', '+ name2;
  return namesummed;
}


// Desafio 5
function footballPoints(wins,ties) {
  let winspoints = wins*3;
  let tiespoints = ties;
  let totalpoints = winspoints+tiespoints;
  return totalpoints;
}


// Desafio 6
function highestCount(aryNumber) {
  let greatNumber = 0;
  let contNumber = 0;
  for (index5 = 0; index5 < aryNumber.length; index5 +=1){
    if (aryNumber[index5] > greatNumber){
      greatNumber = aryNumber[index5];
    }
  }
  for (index6 = 0; index6 < aryNumber.length; index6 +=1){
    if (greatNumber === aryNumber[index6]){
      contNumber +=1;
    }
  }
  return contNumber;
}
console.log(highestCount([0, 0, 0]));
// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  mousecat1 = mouse - cat1;
  mousecat2 = mouse - cat2;
  if (mousecat1<0){
    mousecat1 = mousecat1*(-1);
  }
  if (mousecat2<0){
    mousecat2 = mousecat2*(-1);
  }
  if (mousecat1>mousecat2){
    return "cat2";
  } else if (mousecat1<mousecat2){
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(ary) {
  testfizzbuzz = [];
  for (let index2 = 0; index2 < ary.length; index2 +=1){
    if (ary[index2] % 3 == 0 && ary[index2] % 5 != 0){
      testfizzbuzz.push("fizz");
    } else if (ary[index2] % 3 != 0 && ary[index2] % 5 == 0){
      testfizzbuzz.push("buzz");
    } else if (ary[index2] % 3 == 0 && ary[index2] % 5 == 0){
      testfizzbuzz.push("fizzBuzz");
    } else {
     testfizzbuzz.push("bug!");
    } 
  }
  return testfizzbuzz;
}


// Desafio 9
function encode(strg){
  let newstrg = "";
  for (index3 = 0; index3 < strg.length; index3 +=1){
    if (strg[index3] === "a"){
      newstrg = newstrg + "1";
    } else if (strg[index3] === "e"){
      newstrg = newstrg + "2";
    } else if (strg[index3] === "i"){
      newstrg = newstrg + "3";
    } else if (strg[index3] === "o"){
      newstrg = newstrg + "4";
    } else if (strg[index3] === "u"){
      newstrg = newstrg + "5";
    } else {newstrg = newstrg + strg[index3];
    }
  }
  return newstrg;
}

function decode(strg2) {
  let newstrg2 = "";
  for (index4 = 0; index4 < strg2.length; index4 +=1){
    if (strg2[index4] === "1"){
      newstrg2 = newstrg2 + "a";
    } else if (strg2[index4] === "2"){
      newstrg2 = newstrg2 + "e";
    } else if (strg2[index4] === "3"){
      newstrg2 = newstrg2+ "i";
    } else if (strg2[index4] === "4"){
      newstrg2 = newstrg2 + "o";
    } else if (strg2[index4] === "5"){
      newstrg2 = newstrg2 + "u";
    } else {newstrg2 = newstrg2 + strg2[index4];
    }
  }
  return newstrg2;
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
