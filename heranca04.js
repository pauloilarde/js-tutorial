// nosso código acabou assim:

var Homem = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

Homem.prototype.sexo = 'masculino';

var joao = new Homem('João', 27);
// var pedro = {};
// pedro.__proto__ = Homem.prototype;
// // essa é uma forma de acessar o protótipo de pedro
// // ele retorna masculino ao imprimir o sexo
//
// Homem.apply(pedro, ['Pedro', 22]);

// console.log(joao);
// console.log(joao.sexo);
//
// console.log(pedro);
// console.log(pedro.sexo);

// vamos aprofundar o conceito de herança
// primeiro, vamos criar o objeto pedro de outro jeito
// vamos criar uma função genérica


var Homem = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

Homem.prototype.sexo = 'masculino';

var joao = new Homem('João', 27);


var _new = function () { // nossa função genérica

};


// a partir dessa função genérica criada
// é que vamos criar o objeto pedro

var Homem = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

Homem.prototype.sexo = 'masculino';

var joao = new Homem('João', 27);


var _new = function () {

};

var pedro = _new(Homem, 'Pedro', 22);
// essa linha acima faz a mesma coisa
// da linha em que o objeto joao foi criado
// agora vamos implementar o conteúdo da função

// o conteúdo da função vem a seguir

var Homem = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

Homem.prototype.sexo = 'masculino';

var joao = new Homem('João', 27);


var _new = function (f) { // função passada como parâmetro
   var obj = {};
   // objeto que será criado a partir dessa função que estamos implementando
   obj.__proto__ = f.prototype;
   // definimos que o protótipo do objeto será igual ao da função
   // passada como parâmetro
   f.apply(obj, ['Pedro', 18]);
   // definimos o contexto da função do parâmetro (o objeto de dentro dessa função)
   // passamos os parâmetros hard coded apenas para fins didáticos

   return obj;

};

var pedro = _new(Homem, 'Pedro', 22);

// beleza criou certinho
// vamos prosseguir para pegar os parâmetros dinamicamente
//  - aqueles parâmetros que passamos hard coded

var Homem = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

Homem.prototype.sexo = 'masculino';

var joao = new Homem('João', 27);

var _new = function (f) {
   console.log(arguments);
   // toda função tem seus arguments
   // já falamos isso anteriormente
   var obj = {};
   obj.__proto__ = f.prototype;
   f.apply(obj, ['Pedro', 18]); // precisamos substituir 'Pedro' e 22
   // os argumentos da função
   // impressos pelo console.log
   //{ '0': [Function: Homem], '1': 'Pedro', '2': 22 }

   return obj;

};

// vamos adiante para pegar os argumentos dinamicamente



var Homem = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

Homem.prototype.sexo = 'masculino';

var joao = new Homem('João', 27);

var _new = function (f) {
   console.log(Array.prototype.slice.call(arguments, 1));
   // cortamos o array de arguments
   // para trazer só os argumentos que queremos usar
   // [ 'Pedro', 22 ]

   var obj = {};
   obj.__proto__ = f.prototype;
   f.apply(obj, ['Pedro', 18]);
   return obj;

};


// agora que conseguimos extrair, vamos adiante

var Homem = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

Homem.prototype.sexo = 'masculino';

var joao = new Homem('João', 27);

var _new = function (f) {
   // aquilo tudo que estava no console.log foi para baixo
   var obj = {};
   obj.__proto__ = f.prototype;
   f.apply(obj, Array.prototype.slice.call(arguments, 1));
   // aqui estamos usando o que estava no console.log
   return obj;

};

// tranquilo, imprimiu certinho
// agora vamos usar o nosso new (_new) para criar o joao

var Homem = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

Homem.prototype.sexo = 'masculino';

// essa linha abaixo vai mudar, pois vamos usar
// o new com underline (_new) para criar o joao
// var joao = new Homem('João', 27);
var joao = _new (Homem,'João', 27);


var _new = function (f) {
   var obj = {};
   obj.__proto__ = f.prototype;
   // se atentar a essa linha acima
   // por causa das diferenças entre
   // __proto_, prototype e o conceito Prototype
   f.apply(obj, Array.prototype.slice.call(arguments, 1));
   return obj;

};

var pedro = _new(Homem, 'Pedro', 27);

console.log(joao);
console.log(joao.sexo);

console.log(pedro);
console.log(pedro.sexo);

// TODO: implementar o pseudocodigo de new que o Rodrigo apresenta no fim das aulas. Minuto 19

// Dica final:
// NÃO ESQUEÇA  DE USAR O NEW EM FUNÇÕES CONSTRUTORAS







//
