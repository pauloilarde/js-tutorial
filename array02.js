// filtrando o array com filter

// vamos criar um novo array de carros
// dessa vez teremos um array com objetos
// onde cada objeto terá as propriedades: marca e modelo

var carros = [];

carros[0] = {marca: 'Fiat', modelo: 'Mobi'};
carros[1] = {marca: 'Nissan', modelo: 'March'};
carros[2] = {marca: 'Ford', modelo: 'ka'};



carros.filter(function (elemento) {
   return elemento.marca === 'Ford';
});
// [ { marca: 'Ford', modelo: 'ka' } ]
// retorna o elemento cuja marca é igual a Ford
// filter não modifica o array original


// isso poderia ser feito de outra maneira
// criando um novo array pra guardar os carros Ford
var carrosFord = [];

// e fazermos um forEach no array original
carros.forEach(function (elemento) {

});

// dentro desse forEach, teríamos uma condicional
// se a marca do elemento da iteração for igual a Ford
// adicione o elemento no array carrosFord
carros.forEach(function (elemento) {
   if(elemento.marca === 'Ford'){
      carrosFord.push(elemento);
   }
});


// mapeando elementos do array com Map
// serve para a gente mapear os elementos os transformando
// ou seja, eu quero derivar um novo array
// em que eu faça algum tipo de análise
// trazendo para o nosso caso
// eu tenho um array onde os elementos tem marca e modelo
// e quero saber quais são as marcas que constam nesse array
// fica o seguinte:

carros.map(function (elemento) {
   return elemento.marca;
});

// [ 'Fiat', 'Nissan', 'Ford' ] um novo array com apenas as marcas
// o mapa é indicado pra quando a gente quer
// derivar um novo array transformado
// map não modifica o array original


// temos algo parecido que é o reduce
// ele permite processar os elementos do array
// vamos supor que agora nosso array tem o modelo
// e o preço dos carros
// vamos supor ainda que eu quero saber o total
// desses preços

// reduce não modifica o array original

var carros = [];

carros[0] = {modelo: 'Ka', preco: 25500};
carros[1] = {modelo: 'Gol', preco: 32500};
carros[2] = {modelo: 'Mobi', preco: 31900};

carros.reduce(function (prev, cur) {
   return prev + cur.preco;
}, 0); // 89900
// o 0 (zero) que vai como segundo parâmetro
// é pra inicializar a variável curr
// pois se não ela ficaria undefined

// fazendo da forma tradicional
var total = 0;

carros.forEach(function (carro) {
   total += carro.preco;

   return total;
});


// concatenando arrays
// pra isso, usamos a função concat();
// sintaxe
// array1.concat(array2);

var carros = ['Ka', 'Gol', 'Mobi'];

var motos = ['Honda', 'Yamaha'];

var veiculos = carros.concat(motos);

veiculos; //[ 'Ka', 'Gol', 'Mobi', 'Honda', 'Yamaha' ]

// concat não modifica o array original
// ele gera um novo array


// fatiando um array com slice
// obs: slice é diferente do splice
// splice é para remover, adicionar e/ou substituir
// elementos de um array
// o slice vai cortar esse array
// sintaxe
// array.slice(pos, qtd*)
// * o parametro qtd é opcional
// caso não especifique a posição final
// ele corta da posição inicial atá o fim do array
// ele começa a cortar na posição inicial (inclusive)
// e vai até a posição final - que é o índice menos 1

var carros = [];

carros[0] = 'Ka';
carros[1] = 'Gol';
carros[2] = 'Mobi';
carros[3] = 'Golf';

carros.slice(0, 2); // [ 'Ka', 'Gol' ]
// ele vai cortar da posição 0 (zero)
// até a posição 2 - 1
// nesse caso ele vai cortar o ka e o gol
// o mobi não será cortado

carros.slice( 1); // [ 'Gol', 'Mobi', 'Golf' ]
// reforçando o que foi dito acima
// caso não especifique a posição final
// ele corta da posição inicial atá o fim do array
// slice não modifica o array original



// invertendo a ordem de um array
// pra isso, usamos o reverse()
// reverse modifica o array original

// como está nosso array:
[ 'Ka', 'Gol', 'Mobi', 'Golf' ]

carros.reverse();

// ao usarmos a função reverse, ele fica
[ 'Golf', 'Mobi', 'Gol', 'Ka' ]



// ordenando arrays com o sort(modifica o array original)
// sort modifica o array original
// levando em consideração o nosso array que só tem o nome dos carros
[ 'Ka', 'Gol', 'Mobi', 'Golf' ]

// se nós simplesmente usarmos a função sort
// ele organiza em ordem alfabética
carros.sort();
[ 'Gol', 'Golf', 'Ka', 'Mobi' ]

// mas o sort vai além disso
// vamos usar novamente nosso array que tem o preço
// é possível ordenar pelo preço, por exemplo


var carros = [];

carros[0] = {modelo: 'Ka', preco: 25500};
carros[1] = {modelo: 'Gol', preco: 32500};
carros[2] = {modelo: 'Mobi', preco: 31900};

// pra isso, nós usamos o sort
// e passamos uma função de comparação

carros.sort(function(){

});

// como é uma função de comparação
// dentro dessa função, nós passamos 2 parâmetros
// que são os itens a serem comparados
// e essa função deve retornar uma das três possibilidades:
// 0 (zero)
// um número negativo
// um número positivo

// se for um número negativo,
// o primeiro parâmetro vem em primeiro lugar

// se for 0,
// fica inalterado

// se for um número positivo,
// o segundo parâmetro vem em primeiro lugar


carros.sort(function(a , b){ // os parâmetros da comparação

});

carros.sort(function(a, b){
   return a.preco - b.preco; // a comparação em si
});

// como fica o array, após a comparação
[ { modelo: 'Ka', preco: 25500 },
  { modelo: 'Mobi', preco: 31900 },
  { modelo: 'Gol', preco: 32500 } ]

// então, para cada parâmetro
// ele verifica a propriedade preco
// e compara com o parâmetro 2

// destrinchando o sort no nosso array
// primeiro ele comparou o ka e o gol
// retornou um número negativo, portanto o ka ficou em primeiro
// na sequência, foi feita a comparação entre o mobi e o gol
// o gol como primeiro parâmetro, o mobi como segundo
// retornou um número positivo
// portanto o mobi ficou primeiro que o gol
// daí o o array com a nova ordem

[ { modelo: 'Ka', preco: 25500 },
  { modelo: 'Mobi', preco: 31900 },
  { modelo: 'Gol', preco: 32500 } ]

// caso deseje o mudar a ordem de comparação
// do maior para o menor, por exemplo
// é só mudar a ordem dos parâmetros


carros.sort(function(a, b){
   return b.preco - a.preco; // a comparação em si
});

// array com o preço ordenado do maior para o menor

[ { modelo: 'Gol', preco: 32500 },
  { modelo: 'Mobi', preco: 31900 },
  { modelo: 'Ka', preco: 25500 } ]


// juntando elementos de um array
// pra isso, vamos usar o join();
// ele permite juntar os elementos
// com base em um separador

// vamos pegar o array conhecido nosso já

var carros = [];

carros[0] = 'Ka';
carros[1] = 'Gol';
carros[2] = 'Mobi';
carros[3] = 'Golf';

carros.join(';'); // 'Ka;Gol;Mobi;Golf'

// dentro dos parênteses,
// passamos o que vai ser nosso separador
// isso é útil para gerar arquivos csv, por exemplo
// o join retorna o conteúdo do array
// concatenado em uma única string
// onde cada elemento é delimitado
// pelo caracter passado dentro dos parênteses
// poderia ser:
// vírgula, espaço em branco,
// traço, underline


// podemos ainda usar em conjunto com o split()
carros.join(';').split(';')
[ 'Ka', 'Gol', 'Mobi', 'Golf' ]

// aqui nós juntamos o conteúdo e o quebramos em seguida

// pode ser usado para "Multiplicar" strings
// caso façamos algo do tipo: 'JavaScript' * 10
// o resultado será NaN
// mas é possível fazer aparecer 'JavaScript' 10 vezes na tela
// pra começar, vamos declarar um array vazio
// esse array terá 10 posições
new Array(10);

// se pegramos esse array, e usarmos o join
// então, teremos um separador
new Array(10).join(separador);

// lembrando que o separador deve
// ser passado entre aspas (simples ou duplas, tanto faz)
// se esse separador for a String Javascript
// então nós vamos "Multiplicar" essa String pelo tamanho
// estabelecido anteriormente ao definirmos o array

new Array(10).join('Javascrip ');
// 'JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript JavaScript '
