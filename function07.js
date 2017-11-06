// continuando no problema de acessar
// propriedades do objeto
//vamos fazer o seguinte:
// pegar o counter, objeto já conhecido nosso
// igual ao exemplo anterior


var counter = {
   value: 0,
   add: function () {
      return ++this.value;
   }
};

console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

1
2
3

// beleza, criamos um objeto
// com duas propriedades
// mas mesmo dentro de um objeto,
// essas propriedades são acessíveis
// e podemos definir um valor NaN


counter.value = NaN;
console.log(counter.add());

1
2
3
NaN

// caso façamos isso,
// o valor de value será NaN
// e nós não conseguiremos mais
// adicionar números ao nosso contador


// por conta dessa possibilidade :
// - (inserir valores indesejados nas propriedades dos objetos)
// é melhor encapsular por meio de funções
// lembrando que função nada mais é do que:
// um objeto que contém um bloco de código executável
// e que esse bloco é isolado
// não é possível acessá-lo externamente


// vamos reescrever nosso código como uma função

var counter = function () {
   var value = 0;
   var add = function () {
      return ++value;
   };
};

// se eu tentar acessar a variável value
// vai retornar undefined

//console.log(counter.value);
// undefined

// mesma coisa para a função add
//console.log(counter.add);
// undefined

// se tentar executar a função, vai dar erro
//console.log(counter.add());
// TypeError: counter.add is not a function


// então como a gente faz pra
// comunicar essa função com o meio exterior?
// nós vamos recorrer à factory function
// mas o que faz a factory function?
// ela vai expor o que a gente quer que se torne público
// nosso código vai ficar o seguinte:

var createCounter = function () {
   var value = 0;
   return {
      add: function(){
         return ++value;
      }
   };
};

var counter = createCounter();

// numa primeira olhada pode parecer estranho
// mas o que fizemos foi :
// mudar o nome da antiga variável counter para createCounter;
// remover a variável add e adicionar como propriedade do return;
// criar uma variável counter,
// que recebe o retorno da função createCounter();
// propriedades de objetos são acessíveis
// por isso recorremos a esse artifício
//

console.log(counter.value); // undefined
// aqui value é undefined pois não foi revelado
// ao mundo externo

console.log(counter.add()); // 1
console.log(counter.add()); // 2
console.log(counter.add()); // 3
console.log('**********-----*************');



// uma variação disso seria a função construtora
// que ficaria o seguinte


var Counter = function () {
   var value = 0;

   // na função construtora
   // ao que queremos que fique público
   // é atribuído o this
   this.add = function () {
      return ++value;
   };
};


var counter = new Counter();
// só lembrando que a criação da variável
// é diferente com a função construtora

console.log(counter.value); // undefined

console.log(counter.add()); // 1
console.log(counter.add()); // 2
console.log(counter.add()); // 3
console.log(counter.add()); // 4
console.log('**********-----*************');


// a repetição do trecho a seguir foi proposital
// eu coloquei dentro da função para lembrar
// e aqui fora para reforçar
// na função construtora
// ao que queremos que fique público
// é atribuído o this

// legal, tamo isolando o que queremos
// expondo apenas o que queremos
// mas nós precisamos invocar as funções
// depois de as termos criado
// isso em ambas as formas (factory e constructor functions)
// pra factory fazemos: var counter = createCounter();
// e pra constructor, fazemos: var counter = new Counter();
// pra evitar isso, temos as
// IIFE (Immediately Invoked Function Expression)
// traduzindo: funções imediatamente invocadas
// é uma expressão invocada automaticamente após sua criação
// esse é um padrão bastante utilizado
// quando falamos de module pattern
// é uma evolução da factory function
// mas podemos fazer tbm com constructor, sem problemas
// olha só como vai ficar o nosso código:


var counter = (function () { // abrimos parênteses nessa linha, antes de function
   var value = 0;
   return {
      add: function(){
         return ++value;
      }
   };
})(); // fechamos os parênteses aqui, e abrimos e fechamos parênteses em seguida para chamar a função


console.log(counter.add()); // 1
console.log(counter.add()); // 2
console.log(counter.add()); // 3
console.log(counter.add()); // 4
console.log('**********-----*************');



// podemos avançar mais no module pattern
// vamos supor que a nossa função tenha mais uma operação
// operação essa para resetar o nosso contador
// o código seria o seguinte

var counter = (function () { // abrimos parênteses nessa linha, antes de function
   var value = 0;
   return {
      add: function(){
         return ++value;
      },
      reset: function () {
         value = 0;
      }
   };
})();


console.log(counter.add()); // 1
console.log(counter.add()); // 2
console.log(counter.add()); // 3
counter.reset();
console.log('Contador resetado');

console.log(counter.add()); // 1
console.log('**********-----*************');
console.log('**********-----*************');


// com isso, adentramos no revealing module pattern
// que consiste em deixar privado tudo o que precisa ser privado
// e revelar tudo de uma vez

var counter = (function () {
   var value = 0;
   var add = function(){
      return ++value;
   };
   var reset = function () {
      value = 0;
   };

   return {
      // esse return torna público o que queremos exibir
      // para o mundo externo
      add: add,
      reset: reset
   };
})();


console.log(counter.add()); // 1
console.log(counter.add()); // 2
console.log(counter.add()); // 3
counter.reset();
console.log('Contador resetado');

console.log(counter.add()); // 1
console.log('**********-----*************');
console.log('**********-----*************');



// uma convenção, é colocar underline no que é privado
// que no exemplo é:
// a variável value;
// a variável add;
// a variável reset


var counter = (function () {
   var _value = 0;
   var _add = function(){
      return ++_value;
   };
   var _reset = function () {
      value = 0;
   };

   return {
      add: _add,
      reset: _reset
   };
})();


console.log(counter.add()); // 1
console.log(counter.add()); // 2
console.log(counter.add()); // 3
counter.reset();
console.log('Contador resetado');

console.log(counter.add()); // 1














//
