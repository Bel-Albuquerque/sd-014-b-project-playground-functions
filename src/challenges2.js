// Desafio 10
function techList(techs, name) {
  if (techs.length > 0) {
    techs = techs.sort();
    let c = [];
    for (let i = 0; i < techs.length; i += 1) {
        let a = {
            tech: techs[i],
            name: name
        }
        c.push(a);
    }
    return c;
  } else {
    return "Vazio!"
  }
}

// Desafio 11
function generatePhoneNumber(t) {
  let erro = false;
  let number = "";
  for (let i = 0; i < t.length; i += 1) {
      if (t.length !== 11) {
          return ("Array com tamanho incorreto.");
          erro = true;
          break;
      } else if (t[i] < 0 || t[i] > 9) {
           return ("não é possível gerar um número de telefone com esses valores");
           erro = true;
           break;
      }
      let r = 0;
      for (let i2 = 0; i2 < t.length; i2 += 1) {
          if (t[i2] === t[i]) {
              r += 1;
          }
      }
      if (r > 2) {
          return ("não é possível gerar um número de telefone com esses valores");
          erro = true;
          break;
      }
      r = 0;
  }
  if (erro === false && t.length === 11) {
      return (number = number + "(" + t[0] + t[1] + ")" + ' ' + t[2] + t[3] + t[4] + t[5] + t[6] + '-' + t[7] + t[8] + t[9] + t[10]);
  } else {
    return ('Array com tamanho incorreto.');
  }
}

// Desafio 12
function triangleCheck(a, b, c) {
  return a < (b + c) && a > Math.abs(b - c) && b < (a + c) && b > Math.abs(a - c) && c < (a + b) && c > Math.abs(a - b);

}

// Desafio 13
function hydrate(drinks) {
  let total = 0;
  //Codigo da linha abaixo adaptado do site: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994.
  let numbers = drinks.match(/\d+/g).map(Number);
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  if (total === 1){
    return (total + ' copo de água');
  } else {
    return (total + ' copos de água');
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
