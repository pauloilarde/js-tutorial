var pessoa = {}; // declaração de um objeto chamado pessoa
pessoa.nome = "Paulo"; // criando uma propriedade dinamicamente e já atribuindo um valor

var pessoa1 = {nome: "Ronaldinho"}; // tbm cria um objeto
// a diferença é que em atrbuições inline o símbolo é dois pontos,
// e não igual
// as propriedades do objeto são separadas por vírgula


var pessoa2 = {
  nome: "Letícia",
  idade: 22,
  telefone: null
  endereco: {
    logradouro: "Av. Pres Vargas",
    numero: 2921,
    bairro: "Centro"
  }
};

// aqui o endereço é um objeto e tem suas propriedades
// o telefone é uma propriedade nula


// para qualquer objeto, é possível
// atribuir valores depois da sua criação
//dos jeitos a seguir
pessoa.nome = "Paulo"; // essa é usada quando ja sabe o nome da propriedade
pessoa["nome"] = "João"; // essa é usada quando vai fazer uma introspecção dinamicamente ao objeto
pessoa.endereco.bairro = "Centro";
pessoa["endereco"]["bairro"] = "Centro";
pessoa.telefone = null;
pessoa.peso = undefined;

// mais exemplos
pessoa.telefone = "9999-9999"; // esse nome de propriedade ok

// mas pode acontecer de precisarmos, ou querermos
// uma propriedade que o nome não seja válido
// exemplo: pessoa.cor dos olhos
// o nome cor dos olhos tem espaço, portanto não é válido
// mas ainda assim é possível criar uma propriedade com esse nome
// conforme as linhas a seguir
// isso ajuda para colocarmos propriedades com o nome de palavras reservadas
pessoa["cor dos olhos"] = "azul";

// exemplo
pessoa.if = 10; // pessoa na if é igual a 10
// isso funciona nos navegadores mais modernos
// nos mais antigos não funciona bem (IE8)
// em geral, não podemos fazer
// pessoa.delete, pessoa.case, pessoa.class
// pra isso que serve essa notação


// a linha a seguir não funciona
// caso o objeto endereço não exista
pessoa.endereco.bairro = "Centro";
// caso tente fazer isso sem o objeto criado
// vai dar erro
// nesse caso, prcisa criar o objeto endereco
pessoa.endereco = {};
// ai sim a linha vai funcionar
// é possível setar um valor pra uma propriedade sem objeto criado
// pra dar certo sem criar o objeto
pessoa["endereco"]["bairro"] = "Centro";


// apagando propriedades
// ele serve para apagar propriedades
delete pessoa.idade;

for (var propriedade in pessoa){
  console.log(propriedade + " " + pessoa[propriedade]);
}

// vai exibir os dados da pessoa, sem a idade
