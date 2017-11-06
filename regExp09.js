// vamos substituir os grupos por metacaracteres específicos
// vamos dar uma enxugada e deixar nosso código ainda melhor

// como ficou nosso código no último exemplo
var regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)*<\/tr><\/table>/;
var telefone = "<table><tr></tr></table>";
//console.log(regExp.test(telefone));
//true

// vamos utilizar metacaracteres
// vamos substituir os dígitos e o espaço por metacaracteres

var regExp = /<table><tr>(<td>\(\d{2}\)\s\d{4,5}-?\d{4}<\/td>)*<\/tr><\/table>/;
// note que não temos mais grupos de dígitos, nem o espaço
// nos respectivos lugares temos: \d e \s

var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";

console.log(regExp.test(telefone));
//true


// no próximo exemplo,
// vamos extrair o telefone das linhas da tabela














//
