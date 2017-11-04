// invocando função através de call e apply
// eles fazem basicamente a mesma coisa - chamar uma função
// eles são utilizados para indicar
// em qual escopo a função deve ser chamada
// a diferença é na forma de passar os parâmetros

// vamos tomar como exemplo a função soma
// que nos acompanha desde o início

function soma(a, b){
   return a + b;
}

//podemos invocar a função direto pelo escopo global
soma(4, 3); // 7

// mas tbm podemos chamar essa função por meio de call e apply
// pelo interpretador, podemos colocar um ponto (.) depois
// do nome da função
// isso nos permite acessar algumas funções da API
// entre essas funções estão call e apply

// para dar continuidade
// o call chama a função,
// e aí vc pode passar para essa chamada o escopo
// função.call(escopo, parametro1, parametro2);

// como já citado, o apply faz o mesmo
// mas muda a forma de passar os parâmetros
// função.apply(escopo, parametros)

// vamos usar um exemplo já conhecido

var getIdade = function(){
   return this.idade;
};


var pessoa = {
   nome: 'Paulo',
   idade: 20,
   getIdade: getIdade
};

pessoa.getIdade(); // 20
getIdade(); // undefined
getIdade.call(pessoa); // 20

// getIdade é uma função
// pode ser chamada por call e apply

// como essa função não recebe parâmetros
// podemos chamar do mesmo jeito por meio do apply
// o resultado é o mesmo
getIdade.apply(pessoa); // 20

// vamos alterar a função para ela receber um parâmetro
// vamos colocar um parâmetro chamado extra
// que vai ser adicionado à idade

var getIdade = function(extra){
   return this.idade + extra;
};


var pessoa = {
   nome: 'Paulo',
   idade: 20,
   getIdade: getIdade
};


// agora que a função getIdade recebe parâmetro
// a diferença na hora de chamar será mais nítida

pessoa.getIdade(5); // 25
getIdade.call(pessoa, 5); // 25
getIdade.apply(pessoa, [5]); // 25

// os parâmetros passados via apply vão dentro de um array

// se tivéssemos mais parâmetros
// seria algo do tipo:
getIdade.call(pessoa, 5, 10, 40);
getIdade.apply(pessoa, [5, 10, 40]);

// obs: podemos passar mais parâmetros do que
// foi definido na função
// o interpretador simplesmente ignora
// esse parâmetros passados a mais
// são acessíveis através de arguments
// arguments é uma variável implícita 

var getIdade = function(extra){
   console.log(arguments);
   // arguments exibe tudo o que a função recebeu
   // na hora que foi chamada
   return this.idade + extra;
};


var pessoa = {
   nome: 'Paulo',
   idade: 20,
   getIdade: getIdade
};


// se passássemos parâmetros a menos
// simplesmente ficaria undefined
