// vamos falar sobre boolean
// declarando uma variável booleana
var isento = true;
var estudante = false;

// o tipo boolean existe em várias linguagens
// ele retorna true ou false

isento.toString() // "true"
estudante.valueOf(); // false

// lembrando que true e false
// são palavras reservadas da lliguagem
// não podem ser utilizadas como
// nomes de variáveis, objetos ou funções

// alguns cuidados são necessários
// com os tipos truthy e falsy
// esses são tipos que a gente vê
// como números, strings, objetos,
// arrays, dates, entre outros
// quando estão numa situação booleana
// JS assume os estados de determinados tipos
// como true ou false, dependendo do caso



// Primeiro os que são avaliados como false

!!0 // false
// obs: qq número diferente de zero,
// mesmo negativo, é avaliado como true

!!NaN // false

!!'' // string vazia = false

!!false  // false

!!null // false

!!undefined // false

//Agora os verdadeiros
// criei um objeto pessoa
// ele está vazio ainda

var pessoa = {};

!!pessoa // true
// mesmo vazio o objeto é true

// mesma coisa para arrays

// criei um array vazio
var carros = [];

!!carros // true
// mesmo vazio o array é true
