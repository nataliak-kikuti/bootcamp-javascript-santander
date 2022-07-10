
//  1.Crie uma função que recebe o array alunos e um número que irá representar a média final;
//  2.Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
//  3.Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.



// alunos é um objeto com nome, nota e turma
const alunos = [
  {
    nome:"João",
    nota:5,
    turma:"1B"
  },
  {
    nome:"Sofia",
    nota:9,
    turma:"1B"
  },
  {
    nome:"Paulo",
    nota:6,
    turma:"2C"
  },
  {
    nome:"Miguel",
    nota:3,
    turma:"2C"
  }
]

function alunosAprovados(array,media){
  let aprovados = [];
  for(let i = 0; i<array.length; i++){
    //object destructuring
   const {nota,nome} = array[i];

   if(nota>=media){
    aprovados.push(nome);
  }
      
  // if(array[i].nota>=media){
  //       aprovados.push(array[i].nome);
  //     }
    }

return aprovados;


}

console.log(alunosAprovados(alunos, 5));