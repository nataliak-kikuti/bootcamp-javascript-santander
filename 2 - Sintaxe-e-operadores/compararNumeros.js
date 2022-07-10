function comparaNumeros(num1, num2){
  const primeiraFrase = criaPrimeriaFrase(num1,num2)
  const segundaFrase = criaSegundaFrase(num1,num2)
  return `${primeiraFrase} ${segundaFrase}`

}
function criaPrimeriaFrase(num1,num2){
  let iguais = '';

  if(num1 !== num2){
    iguais = 'não'
  }
  return `Os numeros ${num1} e ${num2} ${iguais} são iguais.`
}

function criaSegundaFrase(num1,num2){
  const soma = num1 + num2;
  let result10 ='menor';
  let result20 ='menor';
  const compara10 = soma > 10;
  const compara20 = soma > 20;

if(compara10){
  result10 ="maior";
}
if(compara20){
  result20 = "maior"
}
return `Sua soma é ${soma}, que é ${result10} que 10 é ${result20} que 20`

}

console.log(comparaNumeros(11,2))
