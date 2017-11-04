// pra fechar a parte 01 de funções
// vamos falar de closures
// o significado de closure é:
// fechamento, encerramento, encarceramento

// vamos voltar a um exemplo já utilizado

var helloWorld = function () {
   return 'Hello World!';
}

helloWorld; // [Function: helloWorld]

helloWorld(); // 'Hello World!'

// até aqui ok

// agora vamos modificar o exemplo
// inserindo uma variável dentro da função

var helloWorld = function () {
   var message = 'Hello world';
   return function () {
      return message;
   };
};

helloWorld; //[Function: helloWorld]
> helloWorld(); // [Function]
> helloWorld()(); //'Hello world'

// quando a gente colocou uma função dentro da outra
// em teoria, a função interna se desconectou
// por isso, não deveria ser possível conseguirmos enxergar
// a variável message impressa
// pela lógica, a variável message seria undefined
// nós conseguimos enxergar por causa do recurso de closure
