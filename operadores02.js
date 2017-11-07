// vamos falar sobre operadores lógicos
// operadores 'E' (&&) e 'OU' ||

// eles funcionam da seguinte forma
// se vc está em um OU e o 1 operando é true
// ele já retorna true sem avaliar o segundo
// no E, se o 1 for falso, ele nem avalia o segundo
// e já retorna false


// em JS a gente retorna o próprio operando
// não retorna true ou false com base no resultado

0 || 2 //2

// pq  retorna 2?
// pq estamos num OU
// e o primeiro é false
// como 2 é true, retorna true

// vamos comparar 1 OU 2

1 || 2 // 1

// retorna 1 pois ele é verdadeiro
// então não precisa verificar o segundo


// vamos comparar 1 E 2
1 && 2 // 2

// retorna 2 pois agora é E
// ele precisa que os dois sejam verdadeiros pra ser true

// agora se compararmos 0 E 2

0 && 2 // 0


// retorna 0 pois ele é false
// e o operador E precisa dos dois true
// pra retornar true

// por conta disso, é possível fazer coisa do tipo
if(10) {
   console.log('Ok');
}
// ele imprime 'Ok'

// ele faz implicitamente um toBoolean
// 10 é true
// então ele avalia como true e executa o bloco


// quando tipos assim são avaliados
// eles assumem valores truthy ou falsy
// por meio da operação abstrata toBoolean


// pra reforçar a ideia
// são 6 os tipos false
// todo o resto é true
// vamos a eles (false)

!!0 // false

// obs
// pq colocar dupla negação?
// pq nós não conseguimos acessar diretamente o toBoolean
// por isso usar essa estratégia


// voltando ao que retorna false

  !!0 // false - zero
  !!NaN // false - Not a Number
  !!'' //false - string vazia
  !!false //false - falso (ainda bem que falso é falso kkk)
  !!null // false - nulo
  !!undefined //false - indefinido


// todos os outros são true por padrão
// incluindo objetos vazios e arrays vazios
// vamos para a prática


var generateSerial = function (max) {
   return Math.floor(Math.random() * max);
};

console.log(generateSerial(1000)); // 168
console.log(generateSerial(100)); // 84
console.log(generateSerial(10)); // 1
console.log(generateSerial()); // NaN
console.log('==============================');

// como fazer para inicializar a variável max?
// existem algumas formas

// a primeira que vamos ver é a mais simples
// e não usa muita coisa que a linguagem oferece

var generateSerial = function (max) {
   if(max === undefined || max === null || max === 0){
      max = 1000;
   }
   return Math.floor(Math.random() * max);
};

console.log(generateSerial(10));
console.log(generateSerial());
console.log('==============================');


// outra forma
// usa um pouco mais de recursos da linguagem
// mas ainda dá pra melhorar

var generateSerial = function (max) {
   if(!max){ // equivalente à forma anterior, mas bem menor
      max = 1000;
   }
   return Math.floor(Math.random() * max);
};

console.log(generateSerial(100));
console.log(generateSerial());
console.log('==============================');



// vamos melhorar a forma anterior



var generateSerial = function (max) {
   max = max || 1000;
   // de cara eu não entendi isso aqui
   // mas vamos para a explicação do Rodrigo Branas
   // fora do bloco da linguagem
   return Math.floor(Math.random() * max);
};

console.log(generateSerial(100));
console.log(generateSerial());
console.log('==============================');

// explicação da linha: max = max || 1000;
// se o parâmetro max tiver valor quando a função for chamada
// (ou seja, se o parâmetro max for true)
// então, esse valor entra na variável max declarada
// dentro da função
// se o parâmetro max não tiver nenhum
// valor quando a função for chamada
// o valor da variável max é 1000
// minha conclusão:
// isso faz todo o sentido
// baseado no que vimos da avaliação do operador OU
// ele verifica se o parâmetro tem valor
// se tiver, ele o atribui à variável
// se não tiver, ele seta 1000 na variável


// tem muita diferença entre & e &&?
// e entre | e ||?
// sim, tem diferença
// mas os operadores sozinhos não são muito utilizados
// eu vou estudar eles com calma mais pra frente
// conforme me aprofundar na linguagem
// por ora vou estudar o que preciso no meu dia-a-dia


// typeof  - retorna o tipo do operando
typeof 10 //'number'

// quase tudo é object em JS
// tirando: number, boolean, string e undefined


// operador new
// usado nas funções construtoras
// vamos relembrar


var Pessoa = function (nome, idade) {
// o nome da função é com letra maiúscula
// para lembrarmos que é uma função construtora
   this.nome = nome;
   this.idade = idade;
}

var paulo = new Pessoa('Paulo Ilarde', 27);

paulo; //Pessoa { nome: 'Paulo Ilarde', idade: 27 }


// operador instanceof
// verifica se um objeto possui
// a função construtora na cadeia de protótipos

paulo instanceof Date; //false
paulo instanceof Pessoa; //true

// vamos falar de protótipos no episódio sobre herança
// apenas adiantando: protótipo é a 'herança' em JS

// operador in
// verifica se existe uma propriedade num objeto

'nome' in paulo; // true
'peso' in paulo // false


// operador delete
// apaga a propriedade de um objeto
// já o vimos antes
// ao falar de object
// e nesse episódio sobre operadores tbm
// vamos apagar o nome do Paulo
// e verificar novamente com o operador in se nome existe

delete paulo.nome; // true - retorno de delete
'nome' in paulo; // false - agora retorna false



// operadores 'normais'
// >, <, >=, <=

// compara dois elementos se um é maior que outro
// ou se um é maior ou igual a outro
// eu entendo o funcionamento deles


// operadores aritméticos
// operações fundamentais da matemática
// com exceção do sinal de mais (+)
// que tem a sobrecarga de concatenar string

// operadores de atribuição
// +=, -=, *=, /=, %=

// operadores de incremento e decremento
// ++ e --
// eu entendo o funcionamento deles
// mas na prática ainda me atrapalho um pouco
// preciso dominar isso
// se usados depois de um número (uso clássico na faculdade)
// ele retorna o número primeiro e incrementa depois
// se usarmos antes do número, ele incrementa primeiro e dps retorna

// operador ternário
// um if escrito de maneira mais enxuta
// (expressão) ? true : false

var idade = 20;

(idade > 17) ? console.log('Maior de idade') : console.log('Menor de idade');
// nesse caso ele imprime 'Maior de idade'

// cuidado com ternário pra não deixa o código muito complexo



//
