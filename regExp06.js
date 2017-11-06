// continuando na flexibilidade da avaliação
// para avaliar telefones com 5 dígitos
// podemos mudar o quantificador de 4 para 5
// mas aí iria parar de avaliar
// telefones fixos
// pois eles têm 4 dígitos
// pra avaliar tanto os números com 4 dígitos
// quanto os com 5 dígitos, podemos colocar o range 4,5
// no quantificador da primeira parte

var regExp = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;
// note que o quantificador da primeira parte agora é flexível

var telefone1 = '(80) 1234-8754'; // quatro dígitos na primeira parte
var telefone2 = '(80) 91234-8754'; // cinco dígitos na segunda parte
console.log(regExp.test(telefone1));
// true
console.log(regExp.test(telefone2));
// true


// legal, agora vamos avançar nos quantificadores
