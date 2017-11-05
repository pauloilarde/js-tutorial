// vamos continuar falando de funções
// nessa aula, vamos falar de escopo global

// de cara já #fikdik
// cuidado com o escopo global

// pra começar vamos ver uma característica
// em que JS difere de outras linguagens
// o escopo global
// nas outras linguagens, o escopo é gerenciado por um linker
// Js não tem, por isso, usa o escopo global
// para se comunicar
// vamos para a prática

// coisa simples:
// supondo que eu tenha uma variável counter
// e crie uma função que vá somando de um em um
// e nomeio essa função como add

var counter = 0;
var add = function () {
   return ++counter;
};

console.log(add());
console.log(add());
console.log(add());

// para cada chamada é adicionado 1
// ao chamar 3 vezes, o resultado será:
1
2
3

// vamos supor que no mesmo código
// eu tenha um array de elementos
// e tenha uma nova função chamada add
// essa nova função adiciona novos elementos
// no array

var itens = [];

var add = function (item) {
   itens.push(item);

   return itens;
}

// a ideia de adicionar é a mesma da função anterior
// mas agora, temos um parâmetro a ser passado
// vamos adicionar letras nesse array


console.log(add('A')); // [ 'A' ]
console.log(add('B')); // [ 'A', 'B' ]
console.log(add('C')); // [ 'A', 'B', 'C' ]



// agora olha que interessante
// se eu chamar a função add sem passar parâmetros
// igual ela foi definida anteriormente
// ele vai adicionar um elemento undefined no array

console.log(add());

/*
1
2
3
[ 'A' ]
[ 'A', 'B' ]
[ 'A', 'B', 'C' ]
[ 'A', 'B', 'C', undefined ]
*/

// se não ficar atento, é comum
// acontecer coisas assim
// principalmente com operações
// "fundamentais"
// tipo: add, get, etc.

// como já dito, JS não tem linker
// que é quem gerencia o escopo global
// pra resolver isso, temos que encapsular
// isso será resolvido no próximo arquivo: function06.js
