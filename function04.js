// vamos falar sobre chamada de funções
// por meio do operador new

// mas pera, dissemos anteriormente que JS não tem classe
// como é possível ter new então?
// o new não serve para instanciar classes?
// sim, o new é pra isso em linguagens orientadas a objeto
// mas aqui em JS ele meio que instancia funções

// vamos criar um objeto da maneira que já sabemos:
var pessoa1 = {nome: 'Cersey', idade: 25};

// beleza, criamos a Cersey
// agora vamos criar uma outra pessoa

var pessoa2 = {nome: 'Tyrion', idade: 22};

// nós temos código repetido na criação de pessoas
// podemos criar uma estrutura do que as pessoas têm em comum
// nesse caso, nome e idade
// e reaproveitar essa estrutura

// dito isto, vamos adiante
// falaremos sobre funções fábrica e funções contrutoras

// primeiro vamos para as funções fábrica

var criarPessoa = function (nome, idade) {
   return {
      nome: nome,
      idade: idade
   };
};

console.log(criarPessoa('Chaves', 12)); //{ nome: 'Chaves', idade: 12 }
console.log(criarPessoa('Kiko', 11)); //{ nome: 'Kiko', idade: 11 }

// nada de novo até aqui
// criamos uma função que é responsável por
// criar pessoas
// essa função é atribuída a uma variável
// e ao chamar essa função, passamos
// os parâmetros que ela precisa receber

// agora vamos para as funções fábrica
// logo de cara já temos a primeira diferença
// funções fábrica começam com a primeira letra maiúscula
// isso é pra facilitar lembrar de usar o operador new
// vamos repetir a função anterior, e criar pessoas


var Pessoa = function (nome, idade) {
   this.nome = nome;
   this.idade = idade;
};

// agora pode surgir a pergunta:
// de onde vem esse this?
// o this faz referência ao objeto que está sendo criado
// pelo operador new
// an? como assim?
// sim, isso mesmo
// o operador new cria um objeto
// sem que vejamos
// vamos criar pessoas agora
console.log(new Pessoa('Arnold', 10)); // Pessoa { nome: 'Arnold', idade: 10 }
console.log(new Pessoa('Willys', 14)); // Pessoa { nome: 'Willys', idade: 14 }



// vamos mesclar os conteúdos aprendidos até aqui
// criaremos um objeto vazio
var sansa = {};
Pessoa.call(sansa, 'Sansa', 17);

// o que fizemos aqui?
// criamos o objeto vazio,
// chamamos a o método call atraveś da função construtora 'Pessoa'
// e passamos os parâmetros:
// o contexto é o objeto criado imediatamente acima da chamada
// o primeiro parâmetro é o nome
// o segundo é a idade

console.log(sansa); // { nome: 'Sansa', idade: 17 }
// temos uma pessoa criada

// cuidados com funções construtoras:
// SEMPRE lembrar de usar o operador new
// ao utilizar funções construtoras
