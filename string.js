// String em Js é imutável
// isso é parecido com outras linguagens
// ou seja, uma vez declarada a String
// só é possível mudar o seu conteúdo
// com uma re-atribuição
// operações feitas com Strings
// não alteram a original
// elas retornam novas Strings

// em várias linguagens, aspas simples servem pra declarar
// variáveis do tipo char
// já as aspas duplas são usadas em strings
// em JS Strings podem ser declaradas com aspas simples ou duplas
// isso evita a necessidade de escapar caracteres
// pois vc pode usar aspas simples dentro de aspas duplas
// o inverso tbm se aplica
// uma coisa a se atentar é:
// se começou a string com aspas simples
// termine com aspas simples
// começou com aspas duplas,
// termine com aspas duplas


// declarando uma string
var nome = "Paulo";

nome.charAt(2); // "u"
nome.charCodeAt(0); // 97
nome.concat(" Ilarde");// "Paulo Ilarde"
// apenas reforçando
// a função concat não altera a string original
// retorna uma nova string
// caso queira alterar a string original
// pode fazer:

nome = nome.concat(" Ilarde"); // a partir dessa linha, a string original foi alterada

// vamos falar sobre split
var nomes = "Paulo;Jasmilla;Jon;Sansa;Brienne";
// a linha acima declara uma variável nomes,
// com vários nomes separados apenas por ponto e vírgula
nomes.split(";");
// a operação acima retorna um array
// onde cada elemento é uma substring da string original
[ 'Paulo', 'Jasmilla', 'Jon', 'Sansa', 'Brienne' ]

// vamos falar de substring
// voltando para a variável nome
// até aqui ela é: 'Paulo Ilarde'
// com isso, se fizer a seguinte operação
nome.substring(0, 5);// "Paulo"

// isso porque o 1 parâmetro é o início
// isto é, de onde queremos começar a "cortar"
// a string original
// o segundo parâmetro é o final
// ou seja, até onde queremos cortar
// na string original
// como colocamos 5, ele vai até o 5-1
// sempre assim,
// começo da substring: indíce passado como 1 parâmetro
// final da substring: indíce menos 1

// agora vamos passar só 1 parâmetro
nome.substring(5); // " Ilarde"

// ele pega do índice em diante, até o fim da string
