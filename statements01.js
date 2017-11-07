// vamos falar sobre statements
// vamos abordar alguns dos mais conhecidos
// for, if, else, continue, while,
// switch, break, thtrow, try e catch


// vamos criar uma função que substitui letras por números em um texto
// oleast -> 013457

var texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum dolor ut lacus vestibulum, sit amet scelerisque nisi pellentesque. Morbi purus nunc, molestie ac turpis id, sodales venenatis arcu. Donec non elit id libero sagittis rutrum. Donec sed nibh ullamcorper, consectetur nulla sit amet, volutpat diam. Nulla dignissim, augue sed aliquam lobortis, neque turpis tincidunt augue, vitae feugiat eros nulla vitae magna. Vestibulum imperdiet, lorem sed auctor aliquam, augue nunc dapibus ante, quis lacinia nisi nulla bibendum nunc.';

// vamos criar a função

// var toHackerCase = function (text) {
//
// };

// beleza, agora que criamos a função
// vamos começar com o for - velho conhecido nosso
// o for tem 3 partes:
// inicialização
// condição
// incremento
// qualquer uma dessas partes pode ser omitida
// inclusive as 3 de uma vez
// o que é equivalente a while(true)
// e gera um loop infinito


var toHackerCase = function (text) {
   for(var i = 0; i < texto.length; i++){
      console.log(texto.charAt(i)); // imprime um caractere por linha
   };
};


// vamos criar um array dentro da função
// se o caractere avaliado for = o, vamos substituir por 0
// se não for, vamos deixar o caractere original

var texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum dolor ut lacus vestibulum, sit amet scelerisque nisi pellentesque. Morbi purus nunc, molestie ac turpis id, sodales venenatis arcu. Donec non elit id libero sagittis rutrum. Donec sed nibh ullamcorper, consectetur nulla sit amet, volutpat diam. Nulla dignissim, augue sed aliquam lobortis, neque turpis tincidunt augue, vitae feugiat eros nulla vitae magna. Vestibulum imperdiet, lorem sed auctor aliquam, augue nunc dapibus ante, quis lacinia nisi nulla bibendum nunc.';

var toHackerCase = function (text) {
   var arrayHacker = [];
   for(var i = 0; i < texto.length; i++){

      if (texto.charAt(i) === 'o'){
         arrayHacker.push(0);
      } else {
         arrayHacker.push(texto.charAt(i));
      }
   }
   return arrayHacker.join('');
};




// pro começo da ideia tá legal
// mas pra continuar, não
// teremos que fazer um if
// pra cada caractere a ser substituído
// vamos fazer, apenas para fins didáticos
// oleast -> 013457


var toHackerCase = function (text) {
   var arrayHacker = [];
   for(var i = 0; i < texto.length; i++){

      if (texto.charAt(i) === 'o'){
         arrayHacker.push(0);
      } else if (texto.charAt(i) === 'l'){
         arrayHacker.push(1);
      } else if (texto.charAt(i) === 'e'){
         arrayHacker.push(3);
      } else if (texto.charAt(i) === 'a'){
         arrayHacker.push(4);
      } else if (texto.charAt(i) === 's'){
         arrayHacker.push(5);
      } else if (texto.charAt(i) === 't'){
         arrayHacker.push(7);
      }  else {
         arrayHacker.push(texto.charAt(i));
      }
   }
   return arrayHacker.join('');
};


// vamos deixar mais lgeível, tirando os elses
// apenas vamos tirar os elses

var toHackerCase = function (text) {
   var arrayHacker = [];
   for(var i = 0; i < texto.length; i++){

      if (texto.charAt(i) === 'o'){
         arrayHacker.push(0);
      }
      if (texto.charAt(i) === 'l'){
         arrayHacker.push(1);
      }
      if (texto.charAt(i) === 'e'){
         arrayHacker.push(3);
      }
      if (texto.charAt(i) === 'a'){
         arrayHacker.push(4);
      }
      if (texto.charAt(i) === 's'){
         arrayHacker.push(5);
      }
      if (texto.charAt(i) === 't'){
         arrayHacker.push(7);
      }
      arrayHacker.push(texto.charAt(i));

   }
   return arrayHacker.join('');
};


console.log(toHackerCase(texto));

// se fizermos apenas isso, as condições vão se sobrepor
// e os caracteres vão se repetir no texto
// não é isso que queremos
// vamos corrigir isso, mas no próximo arquivo





















//
