const array = [30, 30, 40, 5, 223, 2049, 3034, 5]

function valoresUnicos(arr){
  const array = new Set(arr);

  return[...array]
}

console.log(valoresUnicos(array));