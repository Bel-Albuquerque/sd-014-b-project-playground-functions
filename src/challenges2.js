// Desafio 10
function techList(tech, name) {
  if(tech.length === 0 || tech === null){
    return 'Vazio!'
  }
  let techSort = tech.sort()
  let temp
  let box=[]
  for (let index of techSort) {
      temp=index;
      index={};
      index['tech']=temp;
      index['name']=name;
      box.push(index)
  }
  
return box
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'bel'))

// Desafio 11
function highestCount (array){
  let conferindo=array
  let contador=0
  for (let index=0; index<array.length; index+=1){
    for (let confIndex=0; confIndex<conferindo.length; confIndex+=1){
      if (array[index] === conferindo[confIndex]){
      contador+=1
      }
      if (contador>=3){
        return contador
        break
      }

    }
    contador=0
  }
  return contador
}




function generatePhoneNumber(array) {
  if (array.length != 11) {
    return "Array com tamanho incorreto.";
  } 
  for (let index=0; index<array.length; index += 1) {
    if (array[index]<0 || array[index]>9 ||highestCount (array)===3){
      return "não é possível gerar um número de telefone com esses valores"
    }
  }
  let prefixo ='('
  for (let index=0; index<2; index+=1){
      prefixo+= array[index]    
  }
  let tel1= prefixo + ') '
  for (let index=2; index<7; index+=1){
      tel1+=array[index]
  }
  let telFinal= tel1 + '-'
  for (let index=7; index<array.length; index++){
      telFinal+=array[index]
  }
  
      return telFinal
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
