// vamos começar a extrair os telefones das linhas

// vamos usar algumas funções da String API

// match - executa uma busca na String e retorna um array
// contendo os dados encontrados, ou null

// split - divide a string com base em uma
// outra string fixa ou expressão regular

// replace - substitui partes da string com base
// em uma outra String fixa ou expressão regular

// como ficou nosso código

var regExp = /<table><tr>(<td>\(\d{2}\)\s\d{4,5}-?\d{4}<\/td>)*<\/tr><\/table>/;
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
//console.log(regExp.test(telefone));

// utilizando o match
// até aqui nós usamos a regExp como base para a comparação
// agora vamos usar a variável telefone como base

var regExp = /<table><tr>(<td>\(\d{2}\)\s\d{4,5}-?\d{4}<\/td>)*<\/tr><\/table>/;
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
// console.log(regExp.test(telefone));
// antes, perguntávamos para a regExp
// agora vamos perguntar para a variável
//console.log(telefone.match(regExp)); // note que usamos match aqui

// fazendo dessa forma,
// ele retorna onde encotrou um padrão que combina
// entre os dois elementos da comparação

/*
[ '<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>',
  '<td>(70) 98767-9999</td>',
  index: 0,
  input: '<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>' ]
*/

// ou seja, voltou tudo
// pois os dois são exatamente idênticos


// agora vamos extrair o telefone da tabela
// pra começar, vamos remover as tags table, td e tr

var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/;
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";

console.log(telefone.match(regExp));

// fazendo do jeito que está acima,
// ele retorna o somente primeiro elemento
// e o índice dele

/*
[ '(80) 999778899',
  index: 15,
  input: '<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>' ]
*/

// agora, como pegamos todos?
// é o que veremos no exemplo 11













//
