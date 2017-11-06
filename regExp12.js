// vamos substituir os telefones da tabela
// como ficou nosso código no exemplo anterior

var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
 //console.log(telefone.match(regExp));

// em vez de usar a função match
// vamos usar a função replace
// um exemplo simples:
// vamos substituir os números de telefone
// pela string 'telefone'

console.log(telefone.replace(regExp, 'telefone'));
// <table><tr><td>telefone</td><td>telefone</td><td>telefone</td></tr></table>

























//
