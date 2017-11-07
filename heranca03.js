// continuando a aula sobre herança
// nós já vimos bastante como criar objetos
// a seguir, criamos objetos da forma mais simples possível
// mas essa forma é muito suscetível a erros de digitação
// caso seja feita manualmente


var pedro = {
  nome: 'Pedro',
  idade: 22,
  sexo: 'masculino'
};

var joao = {
  nome: 'João',
  idade: 22,
  sexo: 'masculino'
};


// para criar vários objetos de maneira segura,
// podemos usar a função fábrica

var criarHomem = function(nome, idade){
  return{
    nome: nome,
    idade: idade,
    sexo: 'masculino'
  };
};
var joao = criarHomem('João', 25);
var pedro = criarHomem('Pedro', 22);

// pra refrescar a memória,
// funções fábrica tem verbo no nome

// tem ainda o operador new
// pra criar objetos por meio de uma função construtora


var Homem = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = 'masculino';
};

var pedro = new Homem('Pedro', 27);
//console.log(pedro);
// Homem { nome: 'Pedro', idade: 27, sexo: 'masculino' }


// pra refrescar a memoria
// funções construtoras começam com letra maiúscula
// isso ajuda a lembrar de usar o new

// até aqui ok
// vamos criar outro homem de maneira diferente
// primeiro criamos um objeto vazio

var joao = {};

// agora vamos usar o call - já visto no episódio sobre função
// o código fica assim:
Homem.call(joao, 'João', 25);
// no call, os parâmetros são passados um a um em sequência
//console.log(joao);
//{ nome: 'João', idade: 25, sexo: 'masculino' }


// vamos criar outro, usando apply
var paulo = {};
Homem.apply(paulo, ['Paulo', 27]);
// lembre que os parâmetros são passados todos dentro de um array
// pois é uma característica do apply
//console.log(paulo);
// { nome: 'Paulo', idade: 27, sexo: 'masculino' }


// vamos entender melhor a criação de objetos usando new
// quando faemos new Homem, nós temos os objetos criados
// tendo como protótipo: Homem.prototype
// e Homem.prototype por sua vez faz referência a Object.prototype

// agora vem a epxlicação do que foi adiantado na primeira parte
// na linha 30 do arquivo heranca01.js
// pq todo objeto tem Object.prototype como protótipo?
// pq não só Object?
// pq Object é uma função construtora

// e toda função em JS te, uma propriedade chamada prototype
// isso serve pra gente poder definir um protótipo

var x = function () {

}

// ao fazermos 'x.' no interpretador,
// aparece a propriedad prototype como opção
// x.prototype
// e retorna chaves vazias
// {}

// objetos não tem prototype

var y = {};

y.prototype // undefined

// ao tentar acessar o protótipo de um objeto
// ele retorna undefined
// pois está tentando acessar algo que não existe


// baseado nisso, qual a diferença entre
// [[Prototype]] e prototype?

// o primeiro - [[Prototype]]
// ele é abstrato, ele é o conceito de protótipo
// todo objeto em JS é um conjunto de chaves e valores (lembra?)
// valores esses que podem ser de qq tipo
// e ainda, um protótipo que pode ser um objeto ou um null
// esse protótipo, é isso
// caso consulte uma propriedade que não exista no objeto
// vai no protótipo da referência dele
// caso não exista, vai no protótipo da referência dele (lembrando que esse objeto consultado aqui é a referência do anterior)
// caso não exista, vai no protótipo da referência dele
//caso não exista, vai no protótipo da referência dele
// e vai assim até encontrar a propriedade,
// ou então, até acabar a cadeia de protótipos
// o conceito é isso

// o segundo - prototype
// é uma propriedade que só existe em funções
// sabe pq?
// agora vem o conceito de herança por meio de função construtora
// vamos ver no código

var Homem = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = 'masculino';
};

var joao = new Homem('João', 27);
var pedro = new Homem('Pedro', 27);

// no código acima, criamos dois objetos
// os dois objetos têm sexo como uma propriedade
// do objeto criado através do objeto Homem
// que é o objeto do qual pedro e joao derivaram
// vamos ver na prática o conceito de herança


// pra isso, temos que tirar a propriedade sexo do objeto Homem
// e a adicionamos diamicamente fora do objeto
// com a seguinte sintaxe

var Homem = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
    // note que tiramos a propriedade sexo daqui
};

Homem.prototype.sexo = 'masculino';

var joao = new Homem('João', 27);
var pedro = {};

Homem.apply(pedro, ['Pedro', 22]);

// console.log(joao);
// console.log(joao.sexo); // note que desse jeito joao tem sexo masculino
//
// console.log(pedro);
// console.log(pedro.sexo);// mas pedro não tem, retorna undefined


// vamos adiante
// pra retornar um valor no sexo de pedro,
// precisamos acessar o protótipo dele

var Homem = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

Homem.prototype.sexo = 'masculino';

var joao = new Homem('João', 27);
var pedro = {};
pedro.__proto__ = Homem.prototype;
// essa é uma forma de acessar o protótipo de pedro
// ele retorna masculino ao imprimir o sexo

Homem.apply(pedro, ['Pedro', 22]);

console.log(joao);
console.log(joao.sexo);

console.log(pedro);
console.log(pedro.sexo);

// vamos finalizar no próximo arquivo












//
