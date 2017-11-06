// vamos começar a falar de quantificadores
// com isso, vamos limpar nossas variáveis
// pois vamos reduzir a repetição dos grupos do exemplo anterior

// apenas para relembrar,
// nosso código parou assim no último exemplo

var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
var telefone = '(80) 1234-8754';
//console.log(regExp.test(telefone));
// true

// quantificadores podem ser aplicados a:
// caracteres, grupos, conjuntos ou metacaracteres
// {n} - qunatifica um número específico
// exemplos:
// eu quero EXATAMENTE dois
// eu quero EXATAMENTE 5


// {n,} - qunatifica um número mínimo
// exemplo:
// eu quero que vá de 10 em diante


// {n, m} - qunatifica um número mínimo e um número máximo
// exemplo:
// eu quero entre 4 e 5


// vamos para a prática
// começando pelo ddd

var regExp = /^\([0-9]{2}\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
//  note que retiramos um dos grupos
// e colocamos o número 2 entre chaves
// isso significa que queremos exatamente dois grupos
// com caracteres de 0 a 9

var telefone = '(80) 1234-8754';

//console.log(regExp.test(telefone));
// continua true

// vamos colocar 3 grupos agora
// retorna false
var regExp = /^\([0-9]{3}\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
var telefone = '(80) 1234-8754';
//console.log(regExp.test(telefone));
// false


// agora vamos para o número de telefone em si
// começando pela primeira parte do número

var regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9][0-9][0-9][0-9]$/;
// note que diminuiu bastante o tamanho da linha
var telefone = '(80) 1234-8754';
//console.log(regExp.test(telefone));
// true

// fazendo o mesmo para a segunda parte

var regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;
// note que diminuiu bastante o tamanho da linha
var telefone = '(80) 1234-8754';
//console.log(regExp.test(telefone));
// true

// legal, ficou bem menor o código
// mas e se quisermos validar telefones
// com cinco dígitos na primeira parte?
// igual os celulares são
// vamos resolver isso no próximo exemplo
// regExp06.js


















//
