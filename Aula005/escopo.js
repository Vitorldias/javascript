//escopo de função

//variáveis declaradas dentro de funções map sao acessadas fora das mesmas

function mostrarCarro() {
  var carro ='fusca';
  console.log(carro);
}

mostrarCarro(); // fusca no console
//console.log(carro); erro, carro is not defined

//escopo evita o conflito entre nomes

//variavel gloval (erro)

//declarar variaveis sem a palavra chave var, const ou let, cria uma variavel que pode ser acessada em qualquer escopo (global). isso é um erro

function mostrarCarro() {
  carro = 'jaguar';
  console.log(carro);
}

mostrarCarro(); // jaguar
console.log(carro); // jaguar
//use strict impede isso

//escopo de bloco 
//variaveis criadas com var, vazam o bloco. por isso com a instrodução do es6 a melhor forma de declararmos uma variavel é utilizando const e let, pois estas respeitam o escopo de bloco

if (true) {
  var carro = 'celta';
  console.log(carro);
}

console.log(carro); // carro

//var vaza o bloco 
//mesmo com a condição falsa, a variavel ainda sera declarada utilizando hoisting e o valor ficará como undefined

if (false) {
  var carro = 'celta';
  console.log(carro);
}

console.log(carro); // carro

//const e let no lugar de var

// a partir de agora vamos utilizar apenas const e let para declararmos variaveis

if (true) {
  const carro = 'celta';
  console.log(carro);
}

console.log(carro); // carro

//for loop

//ao utilizar var dentro de um for loop, que é um bloco, o valor da variavel utilizada ira vazar e exibir fora do escopo

//const
//mantem o escopo no bloco impede a redeclaração e impede a modificação do valor da variavel, evitando bugs no codigo

//let
//mantem o escopo no bloco, impede a redeclaração. mas permite a modificação do valor da variavel.