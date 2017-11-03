//diferenças entre undefined e null

// undefined é retornado sempre
// que consultamos uma propriedade
// de um objeto e esta não existe

// exemplo
var pessoa = {}; // criei um objeto vazio

pessoa.idade;
// tentei acessar uma propriedade inexistente
// retorna undefined

// isso que aconteceu acima é diferente de null
// null é a ausência de valor
// seria o caso se a propriedade existisse
// mas não tivesse um valor

// criando propriedades depois de já ter criado um objeto
pessoa.nome = 'Paulo'; // criando a propriedade nome

pessoa.idade = 27; // criando a propriedade idade

// ao acessar o objeto, ele imprime tudo o que o objeto contém

{ nome: 'Paulo', idade: 27 }


// agora sim, podemos perguntar
// pro JS a idade e o nome do objeto

// o for a seguir exibe quais são as propriedades
// que esse objeto tem
// nome
// idade
for (var propriedade in pessoa){
   console.log(propriedade);
}

// vamos agora definir propositalmente o valor undefined para idade
pessoa.idade = undefined;

// se a gente repetir o for, a idade continua lá

for (var propriedade in pessoa){
   console.log(propriedade);
}


// a única diferença é que agora ela é undefined
// podemos conferir isso perguntando o que a pessoa
// tem de propriedade e quais os seus valores

pessoa; // { nome: 'Paulo', idade: undefined }



// vamos falar de null
// null é a ausência de valor na propriedade já existente
// como já dito anteriormente
// vamos definir propositalmente a idade da pessoa como null

pessoa.idade = null; // { nome: 'Paulo', idade: null }
