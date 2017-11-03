// Aula 02 - tipos de dados
// JS só tem o tipo number para números
// Diferentes de outras que separa
// os números de acordo com um range específico
// short, int, long, double

var nota = 10;

nota.toExponential(2); // 100
nota.toFixed(2); // 10.00
nota.toPrecision(1) // 1e+1
nota.toString(); // "10"
nota.valueOf(); // 10

// Todas as operações acima são válidas
// as operações a seguir não são válidas

10.toExponential(2);
10.toFixed(2);

// esse tipo de operação não é válida
// pois o JS espera um número após
// o ponto (nesse caso)
// ele não espera que vc vá chamar uma função

// o tipo number em JS segue o padrão:
// IEEE-754 (Standard for floating point)

// é bom tomar cuidado com exceções
// uma operação clássica é: 0.1 + 0.2
// cujo resultado não é 0.3
// mas sim: 0.30000000000000004
0.1 + 0.2; // 0.30000000000000004

// em outras liguagens, dá erro ao dividir
// um número por zero
// em JS é diferente
// a operação 3 / 0 tem como resultado: infinity
// isso porque na matemática
// o resultado desse tipo de operação tende ao infinito
3 / 0; // infinity

// não é possível realizar operações matemáticas
// com Strings
// exemplo: querer "multiplicar" uma String
// (fazer ela aparecer várias vezes na tela)
// colocando um asterisco entre a string e um número
// "Paulo" * 3
// o resultado da operação acima é NaN
// abreviação para Not a Number
"Paulo" * 3 // NaN

// é bom tomar cuidado com NaN, pois
// um resultado assim pode atrapalhar
// o programa
// sem contar que é difícil de rastrear

// Em JS existe a Math API
// Semelhante à classe Math do java

// tem várias funções dentro dela (explorar depois)
// exemplos
// Math.abs: retorna o valor absoluto de um número
// Math.PI: retorna o valor de PI (3.14)
