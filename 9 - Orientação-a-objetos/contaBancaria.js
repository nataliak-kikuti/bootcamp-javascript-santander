// classe
class contaBancaria{
  constructor(agencia,numero, tipo){
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }
  
  get saldo(){
    return this._saldo;
  }

  set saldo(saldo){
    return this._saldo = valor ;
  }

  // metodos
  sacar(valor){

    if(valor > this._saldo){
      return "Operacao negada"
    }
    this._saldo = this._saldo - valor;
    return this._saldo
  }

  depositar(valor){
    this._saldo = this._saldo + valor;
    return this._saldo
  }
}

class ContaCorrente extends contaBancaria{
  constructor(agencia,numero,cataoCredito){
    super(agencia,numero, saldo);
    this.tipo ='Corrente';
    this._cataoCredito  = cataoCredito
  } 

  get cataoCredito(){
    return this._cataoCredito;
  }

  set cataoCredito(saldo){
    return this._cataoCredito = valor ;
  }
}
// classe-filha
class ContaPoupanca extends contaBancaria{
  constructor(agencia,numero){
    super(agencia,numero);
    this.tipo ='Poupança';
    this._cataoCredito  = cataoCredito
    } 
  }


  
class ContaUniversitaria extends contaBancaria{
  constructor(agencia,numero){
    super(agencia,numero);
    this.tipo ='Conta Universitaria';
    this._cataoCredito  = cataoCredito
    } 

    sacar(valor){
      if(valor > 500){
        return "Operação Negada!"
      }

      this._saldo = this._saldo - valor
    }
  }