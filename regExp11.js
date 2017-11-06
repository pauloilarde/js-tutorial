// como parou nosso código:

var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/;
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";

// console.log(telefone.match(regExp));

// nós conseguimos extrair um elemento da tabela desse jeito
// para extrair mais de um, precisamos usar modificadores
// a expressão regular em JS aceita 3 tipos:

// i - Case-insensitive matching
// ou seja, durante a busca ele desconsidera
// letras maiúsculas e minúsculas

// g - Global matching
// ou seja: percorra tudo, não pare na primeira ocorrência

// m - Multiline matching
// para o caso de haver quebras de linha

// obs: podemos usá-los combinados


// aqui no nosso exemplo vamos usar o Global
// pois queremos que ele continue depois de achar a primeira ocorrência

// pra isso, é só colocar a letra g no final da expressão

var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;
// note que a letra g vai fora da segunda barra
// se for usar o objeto regExp, o g seria o segundo parâmetro
// portanto, viria depois da vírgula nesse caso

var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";

console.log(telefone.match(regExp));
 // [ '(80) 999778899', '(90) 99897-8877', '(70) 98767-9999' ]

 // podemos fazer variações
 // exemplo: pra extrair somente o ddd

 var regExp = /\(\d{2}\)/g;

 var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";

 //console.log(telefone.match(regExp));
 // [ '(80)', '(90)', '(70)' ]

 // podemos fazer variações
 // exemplo: pra extrair somente os telefones

 var regExp = /\d{4,5}-?\d{4}/g;

 var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";

 //console.log(telefone.match(regExp));
 // [ '999778899', '99897-8877', '98767-9999' ]

// o próximo passo é substituir os telefones da tabela
// vamos fazer no próximo exemplo














//
