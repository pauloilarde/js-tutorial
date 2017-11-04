// JS não tem alguns tipos de estrutura
// comuns em outras linguagens
// exemplos:
// classe, método, construtor, módulo
// mas, porém, contudo, todavia, entretanto
// tem funções - obaaa
// funções são responsáveis pelo poder de JS
// pois elas podem simular a criação de
// todos os elementos citados acima
// (que as outras linguagens tem)
// uma função é um objeto
// que contém código executável

// é um bloco isolado
// tudo o que é definido dentro da função
// só acessível pelo escopo dessa função
// não é possível acessá-lo de fora


// em JS as funções são de primeira classe
// o que isso quer dizer?
// função de primeira classe é aquela que pode:
// ser atribuída a uma variável;
// passada como parâmetro;
// ou ser retornada de uma outra função


// criar funções em js é bem simples
// basicamente existem dois jeitos
// tem pessoas que seguem um jeito
// tem pessoas que preferem o outro
// basicamente não existe o melhor
// ou pior jeito
// basta entender a diferença entre eles

// os jeitos de criar função:
//function expression e function declaration

// function declaration
function soma(a, b) {
   return a + b;
}

// é muito simples
// só colocar a palavra reservada function
// o nome da função pra invocarmos ela depois
// os parâmetros, caso ela tenha
// e o código que a função deve executar

// function expression

// a função é atribuída a uma variável

var soma = function (a, b) {
   return a + b;
}

// no trecho de código acima
// a variável soma recebe o retorno da função
// essa função não tem nome


// as functions expressions podem ter nome
// conforme o exemplo a seguir:
var soma = function soma (a, b ){
   return a + b;
}

// o nome da função pode ser útil
// pois aparece no stacktrace,
// listas de breakpoints
// e nas ferramentas de debbuging

// diferença entre function expression e declaration
// vamos ver na prática
function soma(a, b) {
   return a + b;
}
console.log(soma);

// o código acima funciona tranquilamente
// apenas uma observação
// que já foi feita acima
// funções podem ser passadas como parâmetro
// ser o retorno de outras funções
// por isso, não precisamos invocar uma função
// assim que ela é declarada


console.log(soma); // [Function: soma]
// na linha acima estamos passando a função
// soma como parâmetro para a função console.log();


console.log(soma(9, 5)); // 14
// na linha acima estamos executando a função soma


// vamos fazer um teste interessante
// com a function declaration
// vamos chamar ao função antes dela ser declarada
console.log(soma(2,2));
function soma(a, b) {
   return a + b;
}

// o código acima funciona
// pois a function declaration é interpretada
// antes da execução
// isso gera uma certa confusão
// em certos programadores


// agora vamos tentar o mesmo com
// a function expression
console.log(soma(2,2));
var soma = function soma(a, b) {
   return a + b;
}

// o código acima não funciona corretamente
// pois o comportamento da function expression
// é diferente


// em resumo
// a function declaration é carregada antes da interpretação do código
// a expression é carregada durante a interpretação do código

// invocando uma função
// funções podem ser invocadas de 4 formas
// diretamente pelo escopo global;
// por meio de objeto;
//por meio de call e aplly;
// e com o operador new

// invocando uma função direto do escopo global
// é só chamar a função depois de tê-la declarado
// simples: só escrever seu nome, abrir e fechar os parênteses
// e passar os parâmetros, caso necessário

var soma = function soma(a, b) {
   return a + b;
}

soma(3, 6); // invocamos a função acima


// passsando função como parâmetro
var produto = {nome: 'Sapato', preco: 150};
// supondo que eu tenha o produto acima
// eu faço uma função que calcula o imposto

var formulaImpostoA = function (preco) { return preco * 0.1; };

// olha só que legal: vamos criar agora uma função
// que calcula o preco
// e passo como parâmetros dessa função:
// o produto que terá o preço calculado
// e a função com a fórmula do cálculo


var calcularPreco = function (produto, formulaImposto) {
   return produto.preco + formulaImposto(produto.preco);
}

// a passagem de função como parâmetro é chamada de lambda
// no JS já existe há muito tempo,
// no java, por exemplo, só foi implementado
// na versão 8 da linguagem

calcularPreco(produto, formulaImpostoA); // 165

// quando eu chamo a linha acima, - função calcularPreco
// estou passando a referência
// do objeto produto, e a referência
// da função formulaImpostoA
// não precisa de forma alguma abrir e fechar parênteses
// ao passar uma função como parâmetro
// fazendo isso (abrir e fechar parênteses)
// eu já estaria executando a função
// mas quem vai executar a função não sou eu
// e sim a função que a recebe como parâmetro
// no exemplo aqui:
// a função calcularPreco vai executar a
// função formulaImpostoA

// agora olha que interessante o reuso de código
// até aqui nosso código está assim:

var produto = {nome: 'Sapato', preco: 150};
var formulaImpostoA = function (preco) { return preco * 0.1; };

var calcularPreco = function (produto, formulaImposto) {
   return produto.preco + formulaImposto(produto.preco);
}

calcularPreco(produto, formulaImpostoA);

// vamos criar uma função para calcular um segundo imposto
var formulaImpostoB = function (preco) { return preco * 0.2};

// a partir disso, posso usar novamente a função
// calcularPreco e passar como parâmetro a função formulaImpostoB
calcularPreco(produto, formulaImpostoB); // 180



// retornando uma função de dentro de outra
var helloWorld = function () {
   return function(){
      return 'Hello world!';
   };
};


// parei no minuto 12 do vídeo
