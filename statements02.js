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


console.log(toHackerCase(texto));



// blz até aqui deu certo
// parei no minuto 9 do vídeo


















//
