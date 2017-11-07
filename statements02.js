// como nosso código parou no último arquivo

var texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum dolor ut lacus vestibulum, sit amet scelerisque nisi pellentesque. Morbi purus nunc, molestie ac turpis id, sodales venenatis arcu. Donec non elit id libero sagittis rutrum. Donec sed nibh ullamcorper, consectetur nulla sit amet, volutpat diam. Nulla dignissim, augue sed aliquam lobortis, neque turpis tincidunt augue, vitae feugiat eros nulla vitae magna. Vestibulum imperdiet, lorem sed auctor aliquam, augue nunc dapibus ante, quis lacinia nisi nulla bibendum nunc.';

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


// vamos melhorar ele
// para não mais repetir os caracteres

var texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum dolor ut lacus vestibulum, sit amet scelerisque nisi pellentesque. Morbi purus nunc, molestie ac turpis id, sodales venenatis arcu. Donec non elit id libero sagittis rutrum. Donec sed nibh ullamcorper, consectetur nulla sit amet, volutpat diam. Nulla dignissim, augue sed aliquam lobortis, neque turpis tincidunt augue, vitae feugiat eros nulla vitae magna. Vestibulum imperdiet, lorem sed auctor aliquam, augue nunc dapibus ante, quis lacinia nisi nulla bibendum nunc.';

var toHackerCase = function (text) {
   var arrayHacker = [];
   for(var i = 0; i < texto.length; i++){

      if (texto.charAt(i) === 'o'){
         arrayHacker.push(0);
         continue;
      }
      if (texto.charAt(i) === 'l'){
         arrayHacker.push(1);
         continue;
      }
      if (texto.charAt(i) === 'e'){
         arrayHacker.push(3);
         continue;
      }
      if (texto.charAt(i) === 'a'){
         arrayHacker.push(4);
         continue;
      }
      if (texto.charAt(i) === 's'){
         arrayHacker.push(5);
         continue;
      }
      if (texto.charAt(i) === 't'){
         arrayHacker.push(7);
         continue;
      }
      arrayHacker.push(texto.charAt(i));

   }
   return arrayHacker.join('');
};



// blz, tá mais legível que antes
// agora vms ver como fica com switch


var toHackerCase = function (text) {
   var arrayHacker = [];
   for(var i = 0; i < texto.length; i++){

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

   }
   return arrayHacker.join('');
};


// blz até aqui deu certo

// agora vamos substituir o for por while
// simples

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


console.log(toHackerCase(texto));

// o while é uma opção ao for
// permite fazer o controle do incremento
// de uma forma mais explícita


















//
