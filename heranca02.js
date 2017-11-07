// como nosso código parou

var homem = {
  sexo: 'masculino'
};

var joao = {
  nome: 'João',
  idade: 22,

};
Object.setPrototypeOf(joao, homem);

var pedro = {
  nome: 'Pedro',
  idade: 22,
  __proto__: homem
};

// console.log('-----------------');
// console.log(joao); // { nome: 'João', idade: 22 }
// console.log(joao.sexo); // masculino
//
// console.log('-----------------');
//
// console.log(pedro); // { nome: 'Pedro', idade: 22 }
// console.log(pedro.sexo); // masculino

// vamos utilizar agora o Object.create para determinar o
// protótipo do objeto
// até aqui, nós vimos Object.create passando null como parâmetro
// agora vamo entender o pq disso
// vamos fazer isso para o pedro
// em vez de ele apontar para o objeto homem, por meio de proto
// vamos fazer o pedro usando o Object.create() passando parâmetros


var homem = {
  sexo: 'masculino'
};

var joao = {
  nome: 'João',
  idade: 22,

};
Object.setPrototypeOf(joao, homem);

var pedro = Object.create(homem);
pedro.nome = 'Pedro';
pedro.idade = 22;

// console.log('-----------------');
//
// console.log(pedro); // { nome: 'Pedro', idade: 22 }
// console.log(pedro.sexo); // masculino

// vamos falar de shadowing
// pra isso, vamos deixar só o João na tela agora

var joao = {
  nome: 'João',
  idade: 22,

};
Object.setPrototypeOf(joao, homem);

// console.log('-----------------');
//
// console.log(joao); // { nome: 'João', idade: 22 }
// console.log(joao.sexo); // masculino

// o que a linguagem faz:
// primeiro ela busca a propriedade no próprio objeto
// caso não encontre, ela vai na referência que o objeto aponta
// caso não exista, ela vai buscar em Object.prototype
// caso não exista, aí fica undefined
// pois acabou a cadeia de protótipos
//

// e como ficaria se a gente fizesse:
// joao.sexo = 'Feminino'?

// agora ele exibe feminino
// apesar do seu prototipo apontar pra homem
// pois ele retorna pra gente
// o primeiro resultado que ele encontrar


joao.sexo = 'feminino'
// console.log(joao); // { nome: 'João', idade: 22, sexo: 'feminino' }
// // note que agora ele traz a propriedade direto no objeto
// // comportamento diferente de antes
// console.log(joao.sexo); // feminino

// o conceito de shadowing é pq a propriedade
// do próprio objeto faz sombra às demais caso ela exista

// pra reforçar o conceito, vamos deletar a propriedade do objeto
delete joao.sexo

// agora vamos exibir novamente

//console.log(joao); // { nome: 'João', idade: 22 }
// note que agora voltou a exibir somente nome e idade

//console.log(joao.sexo); // masculino
// mas o sexo consta se acessarmos diretamente

// podemos ver quais são as propriedades do objeto
// usando Object.keys(objeto);

//console.log(Object.keys(joao)); // [ 'nome', 'idade' ]
// como já dito, nosso objeto só tem nome e idade

// porém, se fizermos um 'for in' no objeto
// ele exibe até o que não é do próprio objeto

// for (var property in joao){
//   console.log(property);
// }
/*
nome
idade
sexo

*/

// isso pq o for in verifica em outros níveis
// além do próprio objeto
// algo citado no vídeo:
// todo objeto tem a função: hasOwnProperty
// vamos criar um objeto novo

var x = {};

// ao fazermos um x. , ele exibe
// todas as funções que possui o objeto
// dentre elas está a mencionada
// hasOwnProperty

// pra ele exibir apenas as propriedades do objeto,
// podemos colocar hasOwnProperty como uma condição dentro do for in

for (var property in joao){
  if(!joao.hasOwnProperty(property)) continue;
  console.log(property);
}

/*
nome
idade
*/


// na continuação da aula, no próximo arquivo
// vamos ver a propriedade protype















//
