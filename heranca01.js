// parte 1 sobre herança:
// pra começar, vamos falar novamente que:
// objeto é uma coleção dinâmica de chaves e valores
// que podem ser de qualquer tipo
// e além disso - ser um conjunto de chaves e valores-
// um protótipo que pode ser um objeto ou null
// se o protótipo for um objeto, então forma-se uma cadeia de protótipos
// caso seja nulo, a cadei termina

// vamos pegar como exemplo dois objetos:
// o objeto João e Pedro
// ambos têm: nome, idade e sexo masculino

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

// o Rodrigo mostrou um esquema visual bem legal
// nesse esquema, ele fala que os dois objetos tem
// o protótipo em comum
// esse protótipo é Object.prototype

// vamos falar adiante o pq é Object.prototype

// por ora, vamos entender que todo objeto em JS
// tem um prototipo

// agora nós vamos:
// tirar a propriedade sexo dos objetos
// criar um objeto homem, com a propriedade sexo

var homem = {
  sexo: 'masculino'
};

var pedro = {
  nome: 'Pedro',
  idade: 22,
};

var joao = {
  nome: 'João',
  idade: 22,
};

// vamos  imprimir pedro e joao e ver o que retorna
console.log(pedro); // { nome: 'Pedro', idade: 22 }
console.log(pedro.sexo);
console.log(joao); // { nome: 'João', idade: 22 }
console.log(pedro.sexo);

// caso a gente tente acessar a propriedade sexo dos objetos
// joao e pedro, vai dar undefined

// console.log(pedro); // { nome: 'Pedro', idade: 22 }
// console.log(pedro.sexo); // undefined
// console.log(joao); // { nome: 'João', idade: 22 }
// console.log(pedro.sexo); // undefined


// agora, temos que fazer com que os objetos joao e pedro
// façam referência ao objeto homem
// para que ambos possam ter também a propriedade sexo
// pra isso, vamos usar a propriedade __proto__
// ela é escrita com dois underlines antes e dois depois

// essa propriedade é uma referência para o protótipo do objeto

// veremos também mais duas formas de referenciar para outro objeto
// mas vamos voltar para a proto
// vamos inserir ela dentro dos objetos pedro e joao
// e colocar o objeto homem como valor
// assim:


var homem = {
  sexo: 'masculino'
};

var pedro = {
  nome: 'Pedro',
  idade: 22,
  __proto__: homem
};

var joao = {
  nome: 'João',
  idade: 22,
  __proto__: homem
};

// console.log(pedro); // { nome: 'Pedro', idade: 22 }
// console.log(pedro.sexo); // masculino
// console.log(joao); // { nome: 'João', idade: 22 }
// console.log(pedro.sexo); // masculino


// agora, joao e pedro apontam para o objeto homem
// e o objeto homem aponta para prototype
// apenas uma observação:
// ao imprimirmos só o objeto, a propriedade sexo não aparece
// precisamos acessar ela diretamente

// cuidado ao usar proto
// ela pode não funcionar em alguns navegadores

// por conta disso, vamos dar preferência a
// Object.getPrototypeOf e Object.setPrototypeOf
// para interagir com o objeto
// vamos fazer só para pedro
// portanto, nosso código vai ficar:

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

console.log('-----------------');
console.log(joao); // { nome: 'João', idade: 22 }
console.log(joao.sexo); // masculino

console.log('-----------------');

console.log(pedro); // { nome: 'Pedro', idade: 22 }
console.log(pedro.sexo); // masculino

// vamos dar continuidade em outro arquivo














//
