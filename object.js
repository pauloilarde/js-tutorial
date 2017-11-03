// objeto é diferente de objeto em java (orientação a objetos)
// em java vc tem uma classe qualquer
// e quando faz a instanciação dessa classe
// é gerado um objeto
// em JS objeto é uma coleção dinâmica de chaves e valores
// de qualquer tipo de dado
// é possível adicionar / remover propriedades
// a qualquer momento

// Objeto em JS dá pra fazer analogia a algumas linguagens
// como o que é chamado de dicionário, mapa

// observações importantes
// em JS não tem classe,
// não tem construtor
// não tem método
// conforme já dito, temos uma coleção dinâmica de chaves e valores
// esses valores, quando assumem a forma de função,
// temos uma espécie de método


// criando um objeto vazio
var pessoa = {};

// criando um objeto com propriedades

var pessoa1 = {
   nome: 'Paulo',
   idade: 27,
   telefone: null
   endereco: {
      logradouro: 'Rua dos Livros',
      numero: 42,
      bairro: 'Centro'
   }

};
// repare que as propriedades são atribuídas
// com dois pontos
// e separadas com vírgulas umas das outras
// já o objeto em si é declarado com igual
// e tem ponto e vírgula no final

// repare no endereço do objeto pessoa1
// ele também é um objeto que tem
// suas propriedades
// vale ressaltar que como este objeto - endereco
// foi declarado dentro de outro,
// ele não recebe o sinal de igual
// pois endereco é uma propriedade da pessoa1
// antes de ser um objeto

// cabe a observação aqui:
// isso não é um Json
// mas sim um objeto literal
// vamos tratar de Json mais pra frente

// vamos ver agora jeitos diferentes de atribuir
// propriedades aos objetos

pessoa.nome = 'João';
pessoa['nome'] = 'João';

// a primeira forma é recomendada
// quando vc já sabe o nome da propriedade que vai acessar
// a segunda é recomendada quando vc vai acessar a propriedade
// de forma dinâmica


// mais exemplos
pessoa.endereco.bairro = 'Centro';
pessoa['endereco']['bairro'] = 'Centro';

// a primeira só pderíamos atribuir um endereço
// a um bairro já existente
// teríamos que criar um objeto bairro para usar ela
// a criação do objeto bairro seria:
// pessoa.bairro = {};
// aí sim podeŕiamos usar a linha escrita no exemplo
// a segunda forma pode ser usada para criar a propriedade
// caso ela ainda não exista

// mais uma diferença
// vamos supor que vc queira nomear uma propriedade
// com um nome que contenha espaços
// exemplo: cor dos olhos
// o interpretador não vai entender
// se fizer da primeira maneira
pessoa.cor dos olhos = 'azul'; // dá erro

// mas é possível fazer da segunda maneira
pessoa['cor dos olhos'] = 'azul'; // { nome: 'Paulo', telefone: '9999-9999', 'cor dos olhos': 'azul' }

// para acessar o valor das propriedades
// é só passar o nome da propriedade par o interpretador
// se a propriedade existir, ele exibe o valor

pessoa.endereco.bairro; //  Centro
pessoa['endereco']['bairro'] // Centro

// inclusive a segunda forma é a única maneira
// de acessar uma propriedade com espaços no nome
// sem dar erro

pessoa.cor dos olhos; // isso dá erro
pessoa['cor dos olhos']; // isso funciona


// apagando propriedades de um objeto
// vamos usar a palavra reservada delete
// supondo que por algum motivo queira excluir a propriedade
// o comando é o seguinte: delete objeto.propriedade

for (var propriedade in pessoa){
   console.log(propriedade + ' ' + pessoa[propriedade])
}
