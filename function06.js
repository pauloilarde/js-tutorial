// como encapsular em JS?
// existem algumas técnicas
// uma delas é usar um objeto
// sempre bom lembrar que:
// objeto é uma coleção (um conjunto) de chaves e valores

// vamos escrever a variável counter
// em forma de objeto

var counter = {};

// dentro dele, vamos adicionar
// propriedades (chaves)
// a primeira propriedade é o valor
// semelhante a fazer: var counter = 0;

var counter = {
   value: 0,
};

// agora vamos adicionar uma outra propriedade
// será a propriedade add
// sim, add deixará de ser variável global
// e será uma propriedade do objeto counter
// seguindo com o código

var counter = {
   value: 0,
   //add:
};

// a propriedade add vai receber uma função
// que retorna a propriedade value incrementada

var counter = {
   value: 0,
   add: function () {
      return ++this.value;
   }
};

// agora, vamos chamar a função add
// por meio do objeto

console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

// resultado disso
1
2
3


// vamos fazer a mesma coisa
// para o array de itens
// adicionar a propriedade value
// essa propriedade será um array vazio

var itens = {
   value: [], // equivalente a var itens = [];
};

// dentro dessa variável itens,
// vamos adicionar uma propriedade add
// propriedade essa que será uma função

var itens = {
   value: [],
   add: function () {

   }
};


// essa função recebe um parâmetro - que vamos chamar de item
// e vamos adicionar o item no array

var itens = {
   value: [],
   add: function (item) {
      this.value.push(item);
   }
};


// por fim, vamos retornar o array

var itens = {
   value: [],
   add: function (item) {
      this.value.push(item);
      return this.value;
   }
};

// vamos adicionar elementos nesse array agora
// repare que a chamada é bem parecida
// chamamos a função add, através do objeto itens

console.log(itens.add('A')); // [ 'A' ]
console.log(itens.add('B')); // [ 'A', 'B' ]
console.log(itens.add('C')); // [ 'A', 'B', 'C' ]

// agora, podemos chamar a função add
// do objeto counter
// que continua adicionando números no contador

console.log(counter.add());

/*
1
2
3
[ 'A' ]
[ 'A', 'B' ]
[ 'A', 'B', 'C' ]
4
*/

// só que aui nos esbarramos no seguinte:
// JS não tem modificadores de acesso,
// igual as outras linguagens tem private, protected
// então é possível acessar as propriedades do objeto
// vamos resolver esse problema no outro arquivo
// function07.js












//
