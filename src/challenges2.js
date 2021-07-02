// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let studyList = [];
  if (tech.length === 0) {
    return "Vazio!";
  }
  for (let index of tech.sort()) {
    studyList.push({
      tech: index,
      name: name,
    });
  }
  return studyList;
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
