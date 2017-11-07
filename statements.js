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


// parei no minuto 3 do vídeo

toHackerCase();

























//
