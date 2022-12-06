//OBJETOS
/*
Conjunto de variáveis e funções, que são chamadas de propriedade e métodos.
*/
var pessoa = {
  nome:'vitor',
  idade:28,
  profissao:'designer',
  possuiFaculdade:true,
}

pessoa.nome; // 'vitor';
pessoa.possuiFaculdade; // true

//Propriedades e métodos consistem em nome (chave) e valor

//Métodos
/*
é uma propriedade que possui uma função no local do seu valor.
*/

var quadrado = {
  lados:4,
  area: function(lado){
    return lado*lado;
  },
  perimetro:function(lado){
    return this.lados*lado;
  },
}

quadrado.lados; //4
quadrado.area(5); //25
quadrado.perimetro(5); //20

//métodos

/*
abreviação de area:function() {} para area () {}, no ES6+
*/

var quadrado = {
  lados:4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}

//organizar o codigo

/*
objetos servem para organizar o código em pequenas partes reutilizaveis.
*/

Math.PI; //3.14
Math.random(); // número aleatório
var pi = Math.PI;
console.log(pi) // 3.14

//math é um objeto nativo do javascript. já percebeu que console é um objeto e log() um metodo?

//dot notation get

/*
acesse propriedades de um objeto utilizando o ponto .
*/

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E'
}

var bg = menu.backgroundColor; // '#84E'

//adicionar propriedades e métodos

/*
basta adicionar um novo nome e definir o valor
*/

var menu = {
  width: 800,
}

menu.height = 50;
menu.position = 'fixed';

//palavra chave this

/*
this irá fazer uma referencia ao proprio objeto.
*/

var height = 120;
var menu = {
  width:800,
  height:50,
  metadeHeight() {
    return this.height / 2;
  }
}

menu.metadeHeight(); // 25
// sem o this, seria 60, this irá retornar o proprio objeto

//prototipo e herança

/*
o objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
*/

var menu = {
  width:800,
}

menu.hasOwnProperty('width') // true
menu.hasOwnProperty('heigth') // false

//hasOwnProperty é um metodo de object

//Exercicios
//crie um objeto com os seus dados pessoais
//deve possuir pelo menos duas propriedades nome e sobrenome
var Eu = {
  nome:'Vitor',
  sobrenome:'Leandro',
  idade: 29,
  cidade:'São Paulo'
}

//crie um método no objeto anterior, que mostre o seu nome completo
Eu.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`
}
//modifique o valor da propriedade preco para 3000
var carro = {
  preco:1000,
  portas:4,
  marca:'Audi',
}

carro.preco = 3000;

//crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que çate ao ver um homem

var cachorro = {
  raca:'Labrador',
  cor:'preto',
  idade:10,
  latir(pessoa) {
    if(pessoa === 'homem'){
      return 'latir'
  }else {
    return 'nada'
  }
}
}

//TUDO É OBJETO

/*
strings, numeros, boolean, objetos e mais, possuem propriedades e métodos. por isso sao objetos
*/
var nome = 'torvi'

nome.length; //5
nome.charAt(1);//'n'
nome.replace('vi', 'valdo');//torvaldo
nome;//torvi

//Numeros
var altura = 1.8;

altura.toString(); //'1.8'
altura.toFixed();// '2'


// por um breve momento o numero é envolvido em um objeto (coerção), tendo acesso assim as suas propriedades e metodos.

//funções

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//return lado * lado;
//}"

areaQuadrado.length; // 1

//elementos do Dom



var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'clique'
btn.addEventListener('click', function(){
  console.log('clicou')
})

//praticamente todos os efeitos com JS sao feitos utilizando propriedades e métodos de objetos DOM.


//Exercicios

// nomeie 3 propriedade ou métodos de strings
//var nome = 'torvi'
//fixed
//length
//slice

//nomeie 5 propriedades ou métodos de elementos DOM
var btn = document.querySelector('.btn');
//btn.addEventListener
//btn.appendChild
//btn.innerHTML
//id
//outerHTML

//busque na web um metodo capaz de interagir com a clipboard
//clipboard é a parte do seu computador que lida com ctrl+c e ctrl+v


