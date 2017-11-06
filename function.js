// a forma a seguir é uma function declaration
// essa função recebe nome
function soma(a, b){
  return a + b;
}

// a forma a seguir é uma function expression
// essa tbm é chamada de função anônima
// esse tipo de criação de função pode ser nomeado
var soma = function (a, b) {
  return a + b;
}

// a variação a seguir é a named function expression
var soma = function soma(a, b) {
  return a + b;
}
// o nome da função é útil:
// quando a função se repete
// quando precisa debugar, as nameds aparecem no stacktrace


// diferenças entre elas
function soma(a, b){
  return a + b;
}
console.log(soma);
// caso rode esse programa ele retorna o nome da função e o que tem dentro dela
// par invocar essa função, é necessário abrir e fechar parênteses
// e passar os parâmetros, caso haja necessidade
console.log(soma(3, 5)); // 8


var soma = function (a, b){
  return a + b;
}
console.log(soma);
console.log(soma(3, 5)); // roda normalmente
// caso rode esse programa ele só retorna o que tem dentro da função
// pois ela não tem nome
=============================




// diferenças entre os tipos de função
console.log(soma(3, 5));
function soma (a, b){
  return a + b;
}

// o código acima roda no estado em que foi escrito
// mesmo chamando
// isso acontece pois a function declaration
// é carregada antes da interpretação

// o código abaixo não roda
// pois a function expression precisa ser declarada antes
// de ser invocada

console.log(soma(3, 5));
var soma = function soma (a, b){
  return a + b;
}



===========================
// invocando funções serão 4 maneiras

// 1 direto do escopo global
var soma = function soma (a, b){
  return a + b;
}
soma(3, 5); // 8

// parei no minuto 10
