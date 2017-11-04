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


// temos algo parecido que é o reduce
// ele permite processar os elementos do array
// vamos supor que agora nosso array tem o modelo
// e o preço dos carros
// vamos supor ainda que eu quero saber o total
// desses preços

var carros = [];

carros[0] = {modelo: 'Ka', preco: 25500};
carros[1] = {modelo: 'Gol', preco: 32500};
carros[2] = {modelo: 'Mobi', preco: 31900};

carros.reduce(function (prev, cur) {
   return prev + cur.preco;
}, 0); // 89900


// fazendo da forma tradicional
// parei no minuto 21 do vídeo
// pois começou a chover















.
