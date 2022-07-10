function validaArray(array, numero) {
  try {
    if (!array && !numero) 
    throw new ReferenceError('Envie os parametros');

    if (typeof array !== 'object')
      throw new TypeError('O array precisa ser do tipo object');

    if (typeof numero !== 'number')
      throw new TypeError('O numero precisa ser do tipo number');

    if (array.length !== numero) 
    throw new RangeError('Tamanho invalido');

    return array;
  } catch(e) {
    if (e instanceof ReferenceError) {
      console.log('Este erro e um ReferenceError')
      console.log(e.message)
    } else if (e instanceof TypeError) {
      console.log('Este erro e um TypeError')
      console.log(e.message)
    } else if (e instanceof RangeError) {
      console.log('Este erro e um TypeError')
      console.log(e.message)
    } else {
      console.log('Tipo de erro nao esperado:' + e)
    }
  }
}

console.log(validaArray([1, 3, 4, 5, 2], 5))


