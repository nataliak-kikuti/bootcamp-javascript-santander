function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 ={
  nome:"Ana",
  idade:40
}

const pessoa2 ={
  nome:"Maria",
  idade:20
}

const animal ={
  nome:"Fiona",
  idade:3,
  raca:"Pug"
}

console.log(calculaIdade.call(animal,10))
console.log(calculaIdade.apply(animal,[10]))