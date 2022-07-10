

function filtraPares(array){
  return array.filter(callback)
}

function callback(item){
  return item% 2 === 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(meuArray));


function filtraImpares(array){
  return array.filter(function(item){
    return item % 2 !== 0;
  })
}



const outroArray = [1, 23, 55, 67, 30, 2, 4]

console.log(filtraImpares(outroArray))