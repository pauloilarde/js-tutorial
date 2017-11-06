// a primeira forma de criar uma data é
// usando a função construtora Date()
// sem passar parâmetros para ela

var data = new Date();

console.log(data);
// retorna o momento em que a função foi chamada
//2017-11-06T16:36:33.057Z

// por esse motivo (retorna o momento em que a função foi chamada)
// é perigoso usar a função new Date() em aplicações web
// se vc tiver que gerar um boleto, por exemplo
// é relativamente simples de burlar


// caso queira ver a quantidade em milissegundos
// até hoje (data de chamada da função)
// é só usar a função getTime()
console.log(data.getTime());
// 1509986395041 (chamada no dia de escrita desse texto: 06/11)



//
