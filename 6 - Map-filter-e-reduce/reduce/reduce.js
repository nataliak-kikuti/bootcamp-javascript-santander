

function somaArray(array){
   return array.reduce(function(valorAnterior,valorAtual){
    console.log({valorAnterior});
    console.log({valorAtual});
    return valorAnterior + valorAtual;
  }, 0);
}

const arr =[1,2];

console.log(somaArray(arr));