// vamos começar a falar sobre operadores
// e de cara já vem uma dica:
// cuidado com operadores de igual (==) e diferente (!=)
// pois o comportamento desses operadores pode produzir
// resultados inesperados, por conta de coersão de tipos
// vamos ver na prática

0 == ''


  0 == '' // true
// zero igual a string vazia


// se comparar um número com uma string
// que o conteúdo seja o mesmo número retorna true

  0 == '0' //true
// número zero igual a string zero

  1 == '1' //true

  10 == '10' //true


  false == undefined // false
// false (boolean) igual a undefined

  false == null //false

  null == undefined //true

  1 == true //true

  0 == false //true

  0 == '\n' //true
// zero igual a string com quebra de linha


// que mágica é essa chamada coersão de tipo ?
// quando eu faço uma comparação entre
// dois operandos com tipos diferentes
// exemplo: 10 == '10'
// a gente vai ter que fazer a conversão
// de um dos dois operandos
// se x é number e y é string, a comparação
// é feita da seguinte forma:
// x == TonNumber(y).
// no nosso exemplo, como o resultado de
// TonNumber(10) é 10, retorna true



// null == undefined
// essa comparação sempre vai ser true
// independente da ordem que for feita

// o lance da ordem vale para comparação de
// strings e números iguais, como visto acima

// um caso interessante a seguir
// vamos comparar um número
// com um objeto number

10 == new Number(10); // true


// se x é Number e y é Object, a comparação
// é feita da seguinte forma:
// x == ToPrimitive(y), que utiliza aoperação valueOf
// ou toString, se não existir valueOf do objeto
// para compará-lo com number
// o valor de valueOf é 10 nesse caso
// portanto, o retorno é true

// pra reforçar a ideia
// vamos fazer o seguinte:
var nota = new Number(10); // nota é um objeto
nota; //[Number: 10]
nota.valueOf(); // 10

10 == nota // true



// obs:
// TonNumber e ToPrimitive são operações abstratas
// isso significa que é a linguagem que as utiliza
// nós (humanos) não podemos utilizar

// ainda na ideia dos objetos
var x = {};

x; // {}

// se comparar 10 == x, retorna false

// seguindo com o x
x.valueOf = function(){
   return 10;
}

// depois de colocarmos um valor em x,
// e fazermos novamente a comparação
// retorna true
// caso o valueOf não exista, é feito o toString


x.toString = function () {
   return 100;
}

// se fizermos a comparação 100 == x, retorna false
// ao retirarmos o velueof de x
delete x.valueOf; // true
// ele retorna true, pois conseguiu deletar o valueOf

// como x agora não tem mais valueOf
// podemos comparar 100 com x
// que agora retorna true

// com isso, concluímos que há uma precedência
// do velueof em relação ao toString
// acessar a especificação da linguagem
// para maiores informações



// dica:
// utilizar o muito igual (===)
// e o muito diferente !==
// ele compara o conteúdo e o tipo
// as comparações entre tipos diferentes
// mas com o conteúdo igual que foram feitas acima
// retornam false caso forem feitas com esses operadores
// que são 'super' igual ou diferente


// não podemos ser tão radicais assim
// a coersão de tipo pode ajudar
// hoje em dia, já existem diferentes tipos de input (do html mesmo)
// mas houve uma época que era só type text
// se não fosse a coersão automática da linguagem,
// seria necessário fazer a conversão a cada input
// por isso, tem horas que a coersão ajuda
// pode confundir às vezes no início
//

// como comparar dois objetos em JS
// em outras linguagens tem o equals
// onde é possível fazer sobrescrita de métodos
// mas em JS não tem isso
// na prática

var x = {};
var y = {};

// declarei dois objetos vazios
// vamos compará-los

x == y // false

// retorna false pois são referências a objetos diferentes

// agora se fizermos o seguinte

var a = {};
var b = a;

a == b; //  true
// retorna true pois são referências ao mesmo objeto


// ah mas e se tiver dois objetos pessoa
// ambos com o mesmo nome?
// retorna false
// pra comparar precisamos criar um comparador próprio













//
