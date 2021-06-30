// Desafio 10
function techList(techs, name) {
  // seu código aqui
  let newArray = [];
  techs.sort();
  if (techs.length === 0) {
    return 'Vazio!';
  }
  for (let index of techs) {
    newArray.push({
      tech: index,
      name,
    });
  }
  return newArray;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
