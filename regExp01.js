// reconhecimento de um telefone simples
// telefone no formato 9999-9999

var regExp = /9999-9999/;
var telefone = '9999-9999';

console.log(regExp.exec(telefone));

// [ '9999-9999', index: 0, input: '9999-9999' ]

console.log(regExp.test(telefone));
// true

















//
