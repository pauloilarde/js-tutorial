// a terceira forma de criar uma data
// é passando uma string como parâmetro


console.log(new Date('2014/12/25')); // 2014-12-25T02:00:00.000Z

console.log(new Date('12/25/2014')); // 2014-12-25T02:00:00.000Z

console.log(new Date('25/12/2014')); // Invalid Date


// no JS não temos o simple date format
// que existe em outras linguagens
// que consiste em definir uma máscara
// e em cima dessa máscara fazemos um parse

// o que temos em JS é:
// uma série de formatos aceitos
// onde o Date.parse vai entender esses formatos
// e retornar o tempo em milissegundos

Date.parse('2014/12/25'); // 1419472800000

new Date(1419472800000); // 2014-12-25T02:00:00.000Z


// oficialmente (apesar de existirem algumas exceções)
// os formatos de data aceitos em JS são:
// o RFC 2822 e o ISO 8601
// o RFC é o que vemos no toString() de Date

// o outro formato é o ISO 8601
// onde temos uma saída parecida com o anterior





















//
