// Desafio 10
function techList(arrayTech, name) {
  // seu código aqui
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < arrayTech.length; index += 1) {
    arrayTech[index] = {
      'tech': arrayTech[index],
      'name': name
    };
  }
  /**
   * Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   * Ordenados de acordo com o valor de uma de suas propriedades.
   * Comparando uma propriedade com outra.
   */
  return arrayTech.sort(function (a, b) {
    if (a.tech > b.tech) {
      return 1;
    }
    if (a.tech < b.tech) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
}

// Desafio 11
function generatePhoneNumber(arrayNumber) {
  // seu código aqui [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]
  let stringNumber = '(';
  if (arrayNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < arrayNumber.length; index += 1) {
    let cont = 0;
    for (let index2 = 0; index2 < arrayNumber.length; index2 += 1) {
      if (arrayNumber[index] === arrayNumber[index2]){
        cont += 1;
      }
      if(cont >= 3){
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }

  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] < 0 || arrayNumber[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (index === 2) {
      stringNumber += ') ';
    }
    if (index === 7) {
      stringNumber += '-';
    }
    stringNumber += arrayNumber[index];
  }

  return stringNumber;
}

// Desafio 12            5      10     9
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  /**
   * Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
   * Para obter o valor absoluto de um número usando a function Math.abs
   */
  if (Math.abs(lineB - lineC) < lineA && lineA < lineB + lineC) {
    if (Math.abs(lineC - lineA) < lineB && lineB < lineA + lineC) {
      if (Math.abs(lineA -lineB) < lineC && lineC < lineB + lineA) {
        return true;
      }
    }
  }

  return false;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
