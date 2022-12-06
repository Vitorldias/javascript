/*var nome = 'vitor'; // String
var idade = 28; // Number
var possuiFavuldade = true // boolean
var time; //Undefined
var comida = null // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // object*/

//primitibos sao todos imutaveis

var nome = 'vitor';
console.log(typeof nome); //typeof mostra o tipo de dado no console, nesse caso "vitor" é string.

var nome = 'vitor ';
var sobrenome = 'dias';
var nomeCompleto = nome + sobrenome ;
console.log(nomeCompleto);

var gol = 1000;
var frase1 = 'romario fez' + gol + 'gols';
var frase2 = `Romario fez ${gol} gols` //template string
console.log(frase2);


//declare uma variavel contendo uma string
var nome ='vitor';
console.log(typeof nome)
//declare uma variavel contendo um numero dentro de uma string
var idade = 28;
console.log(typeof idade)
//declare duas variaveis, uma com seu nome e outra com seu sobrenome e some os mesmos
var nome = 'vitor ';
var sobreNome1 = 'leandro'
var nomeCompleto1 = `${nome} ${sobreNome1}`;
console.log(nomeCompleto1)
//coloque a seguinte frase em uma variavel : it's time

var frase = "it's time";
console.log(frase)

//verifique o tipo de variavel que contem seu nome
console.log(typeof nomeCompleto)

