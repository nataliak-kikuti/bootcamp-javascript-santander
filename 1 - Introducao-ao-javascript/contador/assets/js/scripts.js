var currentNumberWrapper = document.getElementById('currentNumber');
var contador = 0;

function increment(){
  contador++;
  currentNumberWrapper.innerHTML = contador;

}

function decrement(){
  contador--;
  currentNumberWrapper.innerHTML= contador;

}