// essa parte será mostrado um outro jeito de chamar funções
// chamando por meio dos objetos

// começamos com uma reflexão/ pergunta:
// existem métodos em JS? Não existem
// mas podemos simular a existência deles

// em JS, o que é um método?
// um método nada mais é do que um objeto - um objeto é uma coleção dinâmica de chaves e valores
// e esse valor, se for uma função, pode ser invocado
// dando a impressão de que temos um método
// vamos para a prática

var pessoa = {
   nome: 'Paulo',
   idade: 20,
   getIdade: function(){
      return this.idade;
   }
};

pessoa.getIdade(); // 20

// pra acessarmos a idade da pessoa,
// precisamos fazer isso por meio do getIdade
// o que é o getIdade?
// uma função que retorna a propriedade 'idade' do objeto 'pessoa'
// o 'this' se refere ao escopo pelo qual estamos invocando a função
// como invocamos a função pelo objeto 'pessoa', o this se refere ao escopo
// do objeto supracitado

// pra fixar melhor o conceito,
// vamos tirar o 'this' de dentro da função
// nosso código vai ficar:

var pessoa = {
   nome: 'Paulo',
   idade: 20,
   getIdade: function(){
      return idade;
   }
};

pessoa.getIdade(); // ReferenceError: idade is not defined

// porque o erro ocorre?
// pq idade é uma propriedade do objeto pessoa
// e uma propriedade não pode ser acessada de forma avulsa/ independente
// uma propriedade precisa ser acessada por alguém que a englobe
// no código acima, nós estamos acessando uma variável
// e como não temos nenhuma variável chamada 'idade' em nosso código
// aí acontece o erro


// vamos agora externalizar essa função

var getIdade = function(){
   return this.idade;
   // agora que a função está fora do objeto, o this aponta pra onde?
   // vai apontar para quem chamar a função
};


var pessoa = {
   nome: 'Paulo',
   idade: 20,
   getIdade: getIdade
};

pessoa.getIdade(); // 20
getIdade(); // undefined

// se chamarmos a função de forma avulsa
// teremos undefined, pois, como já dito,
// não temos nenhuma variável chamada pessoa
