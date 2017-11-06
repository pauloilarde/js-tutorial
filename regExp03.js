// continuando
// nós adicionamos um circunflexo para
// delimitar o início da expressão
// isso faz retornar false na comparação

var regExp = /^\(48\) 9999-9999/; // adicionamos circunflexo no início

var telefone = 'O telefone é: (48) 9999-9999. Tratar com Paulo';

console.log(regExp.test(telefone)); // false
// antes retornava true, agora retorna false

console.log('*********-----************');

// se retirarmos o início da variável telefone,
// passa a retornar true

var regExp = /^\(48\) 9999-9999/;

var telefone = '(48) 9999-9999. Tratar com Paulo'; // tiramos o início da string

console.log(regExp.test(telefone)); // retorna true
console.log('*********-----************');


// precisamos colocar cifrão ($)
// para delimitar o fim da expressão


var regExp = /^\(48\) 9999-9999$/; // adicionamos $, para delimitar o fim da string

var telefone = '(48) 9999-9999. Tratar com Paulo';

console.log(regExp.test(telefone)); // retorna false
console.log('*********-----************');


// ao retirar o fim da string, retorna true

var regExp = /^\(48\) 9999-9999$/; // adicionamos $, para delimitar o fim da string

var telefone = '(48) 9999-9999';

console.log(regExp.test(telefone)); // retorna true

// nosso próximo passo é aceitar qualquer número de telefone













//
