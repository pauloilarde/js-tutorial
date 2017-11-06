// nesse passo, vamos aceitar qualquer número de telefone
// o que fizemos até aqui foi comparar um único número
// isso não traz muitas vantagens no mundo real rs

// pra aceitarmos qualquer número, precisamos
// flexibilizar a expressão regular por meio de grupos

// grupos de caracteres

// [abc] - aceita qualquer caractere dentro do grupo
// como nosso grupo só tem os caracteres a, b e c
// só vai aceitar esses caracteres

// [^abc] - negação do anterior
// nesse aqui, ele NÃO aceita os caracteres do grupo especificado
// ou seja, ele NÃO aceita a, b, nem c

// [0-9] - o traço diz pra gente que ele aceita qualquer caractere entre 0 e 9
// lembrando que o traço só tem esse efeito dentro do grupo
// fora do grupo não quer dizer nada

// [^0-0] - NÃO aceita qualquer caractere entre 0 e 9
// o traço tem o mesmo efeito aqui

// aqui, pra iniciar nós vamos criar um grupo pra cada dígito do nosso telefone
// indicando que serão aceitos os caracteres entre 0 e 9
// para todos os dígitos

var regExp = /^\(90\) 9999-9999$/; // note que mudamos o ddd

var telefone = '(80) 9879-9999'; // note que mudamos a 1 parte do telefone

//console.log(regExp.test(telefone));
// false

//console.log('*********-----************');

// vamos começar a trabalhar com grupos
// primeiro para o ddd

var regExp = /^\([0-9][0-9]\) 9999-9999$/;
// note que adicionamos um grupo
// para cada dígito do ddd

var telefone = '(80) 9999-9999';
// note que voltamos a 1 parte do telefone
// para 9999, ao fazermos isso retorna true

//console.log(regExp.test(telefone));
// true

//console.log('*********-----************');

// agora vamos adicionar grupos para os dígitos
// a começar pela primeira parte

var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-9999$/;
// adicionamos grupos para a primeira parte do telefone
var telefone = '(80) 1234-9999'; // alteramos a primeira parte do número

// console.log(regExp.test(telefone));
// true

//console.log('*********-----************');

// vamos fazer isso para a segunda parte do telefone

var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;

var telefone = '(80) 1234-8754'; // alteramos a segunda parte do número

console.log(regExp.test(telefone)); // true

console.log('*********-----************');

// até aqui nosso programa tá flexível
// mas ficou verboso demais
// vamos resolver isso com quantificadores
// assunto do próximo exemplo














//
