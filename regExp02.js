// O telefone agora tem código de área - ddd
// (48) 9999-9999
// Como fz pra reconhecer?

var regExp = /\(48\) 9999-9999/;
// note que precisamos escapar os parênteses,
// sem isso, o retorno de test seria false
var telefone = '(48) 9999-9999';

console.log(regExp.test(telefone)); // true

console.log('********************************');

// evoluindo

// a nossa variável regExp permanece inalterada:
var regExp = /\(48\) 9999-9999/;

// mas vamos supor que tívessemos o seguinte texto na variável telefone
var telefone = 'O telefone é: (48) 9999-9999. Tratar com Paulo';

// se a gente testar o conteúdo das duas variáveis volta true
console.log(regExp.test(telefone)); // true

// isso pq a função test só pergunta para a telefone
// se dentro dela existe algum padrão igual ao
// da variável regExp
// no nosso caso existe
// dentro da variável telefone consta um conteúdo idêntico
// ao da variável regExp

// para fins didáticos, vamos rodar a função exec
console.log(regExp.exec(telefone));

// retorno de exec
/*
['(48) 9999-9999',
  index: 14,
  input: 'O telefone é: (48) 9999-9999. Tratar com Paulo']
*/

// o retorno de exec traz o índice
// de onde começa as similaridades

// nosso próximo passo é fazer isso dar false
// vamos resolver no próximo exemplo
// delimitando um início e fim para a busca
// da nossa expressão















//
