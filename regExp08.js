// nesse exemplo, vamos verificar vários telefones
// e não apenas um, como vinhamos fazendo até aqui
// isso serve, por exemplo, para telefones dentro de uma tabela



// como parou nosso código no último exemplo
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;
var telefone1 = '(80) 912348754';
//console.log(regExp.test(telefone1));
// true

var telefone2 = '(80) 91234-8754';
//console.log(regExp.test(telefone2));
// true


// dando andamento no exemplo:
// vamos alterar a variável telefone

var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
//console.log(regExp.test(telefone));
// false

// retornou false porque o início da nossa regExp
// é o telefone em si
// e agora a nossa variável telefone começa com table
// vamos mudar os extremos da nossa regExp

var regExp = /<table><tr><td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td><\/tr><\/table>/;
var telefone = "<table><tr><td>(80) 999778899</td></tr></table>";
// para fins didáticos, vamos deixar apenas um telefone
//console.log(regExp.test(telefone));
// true

// colocando os outros telefones, dá false a comparação
var regExp = /<table><tr><td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td><\/tr><\/table>/;
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";

// para fins didáticos, vamos deixar apenas um telefone
//console.log(regExp.test(telefone));
// false


// vamos usar aqui a ideia dos quantificadores
// no nosso caso, queremos repetir o telefone
// uma ou mais vezes, mas obrigatoriamente uma vez
// portanto mudaremos a nossa variável regExp

var regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+<\/tr><\/table>/;
// note que envolvemos a td com parênteses
// e colocamos um sinal de mais (quantificador) depois de fechar os parênteses

var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";

// para fins didáticos, vamos deixar apenas um telefone
//console.log(regExp.test(telefone));
// true

// pra reforçar a ideia do quantificador +:
// se retirarmos todos os telefones, retorna false
// pois ele espera pelo menos um telefone
var regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+<\/tr><\/table>/;
var telefone = "<table><tr></tr></table>";
//console.log(regExp.test(telefone));
// false

// ao fazer o mesmo teste com o quantificador *

var regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)*<\/tr><\/table>/;
var telefone = "<table><tr></tr></table>";
console.log(regExp.test(telefone));
// true

// retornou true pois o asterisco pega nenhuma ou mais ocorrências




// indo mais além
// vamos substituir os grupos por metacaracteres específicos
// é o que veremos no próximo exemplo










//
