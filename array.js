// não existem array de verdade na liguagem js
// aqueles arrays clássicos que vemos em outras linguagens
// com tamanho finito, são diferentes do que chamamos de arrays
// na linguagem javascript

// os arrays são simplesmente objetos especiais
// que oferecem meios para acessar e manipular
// suas propriedades por meio de índices

// isso não é de todo ruim
// prejudica um pouco a performance,
// por outro lado, é mais fácil de utilizar
// do que os arrays de outras linguagens

// criando um array
var carros = []; // criamos um array vazio

// essa é a forma mais simples de criar um array

// pra adicionar elementos, podemos fazer o seguinte:
// chamar o array, passar o índice e informarmos o conteúdo

carros[0] = 'Ka';
carros[1] = 'Gol';
carros[2] = 'March';

// no exemplo acima, colocamos 3 elementos no array
// foram 3 strings

// não é necessário seguir uma ordem

// podemos adicionar um elemento na posição 4
// sem que exista um elemento na posição 4
// ao imprimirmos esse array, ele vai trazer
// um elemento em branco na posição 3

carros[4] = 'Mobi';

console.log(carros); // [ 'Ka', 'Gol', 'March', , 'Mobi' ]




// tbm é possível criar um array e ao mesmo tempo
// inicializar os seus elementos

var carros = ['Ka', 'Gol', 'March', 'Mobi'];


// outra forma de criar arrays é com o new Array();
// só reforçando, new é a função construtora
// que vimos anteriormente

var carros = new Array();


// dentro dessa maneira de criar um array
// temos duas possibilidades de inicializar
// os elementos

// a primeira:
// passando os elementos inline

var carros = new Array('Ka', 'Gol', 'March', 'Mobi');

// a segunda:
// definindo um tamanho
var carros = new Array(10);

console.log(carros); // [ , , , , , , , , ,  ]
// se apenas definimos um tamanho para o array
// e na sequencia o imprimimos, ele mostra um array
// com as posições vazias
// mas isso não significa que o array está
// limitado ao número que colocamos
// significa que esse é o tamanho inicial do array
// apenas isso
// em JS o array não tem tamanho definido
// podemos adicionar elementos a nosso bel prazer
// em outras linguagens, o tamanho definido inicialmente
// é o tamanho máximo do array


// API do array

// a API do array é muito rica em funcionalidades
// é só digitar o nome do array e um ponto (.)

// vamos ver algumas aqui:

// valueOf()
// mostra o que tem dentro do array
var carros = new Array('Ka', 'Gol', 'March', 'Mobi');
carros.valueOf(); // [ 'Ka', 'Gol', 'March', 'Mobi' ]

// toString
// converte o conteúdo do array para String

carros.toString(); //'Ka,Gol,March,Mobi'

// agora vamos ver a propriedade length
// sim, propriedade
// length não é função
// essa propriedade mostra o tamanho do array

carros.length; // 4

// se chamarmos como função dá erro

carros.length(); // TypeError: carros.length is not a function



// inserir e remover elementos de um array

// inserir um novo elemento no final do array
// isso é feito com o push(elemento);

carros.push('Onix');
5 // ele retorna o número de elementos atualizado

carros; // [ 'Ka', 'Gol', 'March', 'Mobi', 'Sonic' ]


// remover um elemento no final do array
// isso é feito com o pop();

carros.pop();
'Sonic' // ele retorna o elemento excluído
carros; // [ 'Ka', 'Gol', 'March', 'Mobi' ]


// inserir um novo elemento no início do array
// isso é feito com o unshift(elemento);

carros.unshift('Fiesta');
5 // ele retorna o número de elementos atualizado

carros; // [ 'Fiesta', 'Ka', 'Gol', 'March', 'Mobi' ]

// remover o primeiro elemento do array
// isso é feito com o shift

carros.shift();
'Fiesta' // ele retorna o elemento retirado


// localizando elementos com indexOf()
// o indíce do elemento é uma informação importante
// ele geralmente é usado em conjunto com outras
// funções
// como o splice, por exemplo

// vamos imprimir nosso array de carros

carros; // [ 'Ka', 'Gol', 'March', 'Mobi' ]

carros.indexOf('Gol'); // 1


// vamos falar do splice agora
// o splice é quase comom um canivete suíço
// ele permite que a gente remova elementos de uma posição
// que a gente troque elementos numa determinada posição
// e que a gente adicione elementos numa posição

// obs: reza a lenda que a linguagem foi feita em 10 dias
// talvez se tivesse mais tempo, existiriam outras operações
// para as diferentes funções do splice
// um remove talvez, ou quem sabe um change

// enfim, voltando
// sintaxe do splice para remover
// array.splice(pos, qtd);
// onde:
// array = nome do array a ser alterado
// pos = indíce do elemento em que irá ter início a remoção
// qtd = quantidade de elementos a serem removidos

// vamos remover o gol, já que sabemos a posição dele

carros.splice(1, 1);
[ 'Gol' ] // ele retorna o(s) elemento(s) removido(s)


// substituindo elementos com o splice

// a base da operação é a remoção
// ele remove o(s) elemento(s) de acordo com o que foi passado nos parâmetros
// e insere o(s) novo(s) elemento(s)
// sintaxe do splice para substituir
// array.splice(pos, qtd, elemento);
// onde:
// array = nome do array a ser alterado
// pos = indíce do elemento em que irá ter início a remoção
// qtd = quantidade de elementos a serem removidos
// elemento - o que será adicionado no lugar

carros; //[ 'Ka', 'March', 'Mobi' ] nosso array como está
carros.splice(1, 1, 'Gol');
[ 'March' ] // ele retorna o elemento retirado

carros; // [ 'Ka', 'Gol', 'Mobi' ]

// adicionando elementos com o splice

// a sintexe é a mesma da substituição
// porém é passado 0 (zero) no segundo parâmetro

carros.splice(1, 0, 'March'); // adiciona um carro na posição 1
[] // retorna um array vazio, pois nenhum elemento foi removido

carros; // [ 'Ka', 'March', 'Gol', 'Mobi' ] - novo array, no estado
// os elementos que já existem no array, e ficam depois da nova posição
// simplesmente são empurrados uma posição para a frente


// iterando array com o forEach
// o forEach é mais simples de escrever do que o for tradicional
// percorrendo o array com forEach

carros.forEach(function (elemento) {
   console.log(elemento);
});

// mesma coisa com o for tradicional
// mais verboso
for(var i = 0; i < carros.length; i++){
   console.log(carros[i]);
}





.
