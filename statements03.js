// continuando nas statements
// vamos para tratamento de erro


// como nosso código parou

var texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum dolor ut lacus vestibulum, sit amet scelerisque nisi pellentesque. Morbi purus nunc, molestie ac turpis id, sodales venenatis arcu. Donec non elit id libero sagittis rutrum. Donec sed nibh ullamcorper, consectetur nulla sit amet, volutpat diam. Nulla dignissim, augue sed aliquam lobortis, neque turpis tincidunt augue, vitae feugiat eros nulla vitae magna. Vestibulum imperdiet, lorem sed auctor aliquam, augue nunc dapibus ante, quis lacinia nisi nulla bibendum nunc.';

var toHackerCase = function (text) {
   var arrayHacker = [];

   var i = 0; // a inicialização vem pra fora
   while(i < texto.length ){ // dentro do parênteses fica a condição avaliada
      // e o incremento vai lá pra baixo
      switch (texto.charAt(i)) {
         case 'o':
            arrayHacker.push(0);
            break;
         case 'l':
            arrayHacker.push(1);
            break;
         case 'e':
            arrayHacker.push(3);
            break;
         case 'a':
            arrayHacker.push(4);
            break;
         case 's':
            arrayHacker.push(5);
            break;
         case 't':
            arrayHacker.push(7);
            break;
         default:
            arrayHacker.push(texto.charAt(i));

      }
      i++; // aqui fica o oncremento
   }
   return arrayHacker.join('');
};


// indo adiante, no tratamento de erros
// vamos começar avaliando a seguinte condição:
// if (!text)
// conforme vimos anteriormente
// ele avalia se o texto é:
// 0, null, undefined, false, string vazia ou NaN
// se for qualquer coisa diferente disso, dá true
// se for algum desses, dá false


var toHackerCase = function (text) {
   if(!text) throw 'Invalid text.';
   // note que o if não tem chaves
   // isso pq ele só tem um comportamento
   // se não for isso, ele não tem q fazer nada
   // nesse caso tranquilo
   var arrayHacker = [];

   var i = 0; // a inicialização vem pra fora
   while(i < texto.length ){ // dentro do parênteses fica a condição avaliada
      // e o incremento vai lá pra baixo
      switch (texto.charAt(i)) {
         case 'o':
            arrayHacker.push(0);
            break;
         case 'l':
            arrayHacker.push(1);
            break;
         case 'e':
            arrayHacker.push(3);
            break;
         case 'a':
            arrayHacker.push(4);
            break;
         case 's':
            arrayHacker.push(5);
            break;
         case 't':
            arrayHacker.push(7);
            break;
         default:
            arrayHacker.push(texto.charAt(i));

      }
      i++; // aqui fica o oncremento
   }
   return arrayHacker.join('');
};



// console.log(toHackerCase(texto)); // vamos executar uma vez com parâmetro
// console.log(toHackerCase()); // e outra vez sem parâmetro
// ao executar a função sem parâmetro, retorna o erro

// chamando as funções nessa ordem
// primeiro com parâmetro e depois sem, ele executa
// se inverter a ordem, ele para quando se depara com o erro
// e nem chega a executar o resto do programa
// no caso seria essa a ordem da execução (pra dar erro)

// console.log(toHackerCase());
// console.log(toHackerCase(texto));

// em cima disso, vem a ideia de try catch
// primeiro eu tento executar - try
// caso não consiga, eu faço alguma coisa - catch


// try {
//    console.log(toHackerCase()); // tentou executar, mas passamos a função sem parâmetro
// } catch (e) {
//    console.log('Error ' + e);
//    // imprime a string 'Error', e o erro em si
//    // o erro previamente estabelecido foi: Invalid text.
// }


// pra melhorar, vamos criar uma variável
// pra receber a mensagem de erro

var HackerTextError = function (message) {
   this.message = message;
   this.name = 'Hacker Text Error';
};

var toHackerCase = function (text) {
   if(!text) throw new HackerTextError('Invalid text.') ;
   var arrayHacker = [];

   var i = 0;
   while(i < texto.length ){

      switch (texto.charAt(i)) {
         case 'o':
            arrayHacker.push(0);
            break;
         case 'l':
            arrayHacker.push(1);
            break;
         case 'e':
            arrayHacker.push(3);
            break;
         case 'a':
            arrayHacker.push(4);
            break;
         case 's':
            arrayHacker.push(5);
            break;
         case 't':
            arrayHacker.push(7);
            break;
         default:
            arrayHacker.push(texto.charAt(i));

      }
      i++; // aqui fica o oncremento
   }
   return arrayHacker.join('');
};

// try {
//    console.log(toHackerCase());
// } catch (e) {
//    console.log('Error ' + e.message + ' ' + e.name);
//    // note que chamamos a propriedade message do objeto
//    // e concatenamos com o nome do objeto
//    // ele imprime:
//    // Error Invalid text. Hacker Text Error
// }

// pra melhorar ainda mais,
// podemos ter categorias diferentes de erros
// é o que vamos fazer
// pra isso, vamos adicionar mais uma condicional
// pois se vier como parâmetro um número
// ele vai avaliar como true, e vai executar a função
// vamos verificar o tipo do parâmetro

var HackerTextError = function (message) {
   this.message = message;
   this.name = 'Hacker Text Error';
};

var toHackerCase = function (text) {
   if(!text) throw new HackerTextError('Invalid text.') ;
   if(typeof text !== 'string') throw new HackerTextError('Invalid Type.');
   // adicionamos mais uma condicional
   // note que essa tbm não envolve o bloco entre chaves
   // e como adicionamos mais uma condicional, temos que
   // fazer mais um try catch lá embaixo
   var arrayHacker = [];

   var i = 0;
   while(i < texto.length ){

      switch (texto.charAt(i)) {
         case 'o':
            arrayHacker.push(0);
            break;
         case 'l':
            arrayHacker.push(1);
            break;
         case 'e':
            arrayHacker.push(3);
            break;
         case 'a':
            arrayHacker.push(4);
            break;
         case 's':
            arrayHacker.push(5);
            break;
         case 't':
            arrayHacker.push(7);
            break;
         default:
            arrayHacker.push(texto.charAt(i));

      }
      i++;
   }
   return arrayHacker.join('');
};

try {
   console.log(toHackerCase());
} catch (e) {
   console.log('Error ' + e.message + ' ' + e.name);
}

try {
   console.log(toHackerCase(1));
} catch (e) {
   console.log('Error ' + e.message + ' ' + e.name);
}

// o que ele imprime pra nós
// Error Invalid text. Hacker Text Error
// Error Invalid Type. Hacker Text Error
// e logo abaixo executa a função normalmente

console.log(toHackerCase(texto));

























//
