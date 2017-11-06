// avnaçando nos quantificadores
// relembrando:
// quantificadores podem ser aplicados a:
// caracteres, grupos, conjuntos ou metacaracteres

// ? - zero ou um
// significa que o caractere é opcional

// * - zero ou mais
// avalia se não tem nenhum ou se tem: um ou mais caracteres

// + - um ou mais
// verifica se tem pelo menos um ou mais caracteres

// no nosso exemplo, o traço que separa a primeira
// e a segunda parte, será opcional

// como nosso código parou no último exemplo
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;

var telefone = '(80) 91234-8754';

// console.log(regExp.test(telefone));
// true


// primeiro, vamos retirar o traço da variável telefone
// e testar a expressão, comparando com a variável

var regExp = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;

var telefone = '(80) 912348754'; // note que retiramos o traço separador

// console.log(regExp.test(telefone));
// false

// vamos tratar o erro agora,
// simplesmente colocando uma interrogação após o traço
// na nossa variável regExp
// portanto, o código fica:

var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;
// note que há uma interrogação após o traço

var telefone1 = '(80) 912348754'; // note queesse telefone NÃO TEM traço
console.log(regExp.test(telefone1));
// true

var telefone2 = '(80) 91234-8754'; // note que esse telefone TEM traço
console.log(regExp.test(telefone2));
// true


// legal até aqui
// mas comparamos apenas um número de telefone
// no próximo exemplo, vamos ver como comparar
// caso tenhamos um grupo de telefone numa tabela, por exemplo
//













//
