// funções

/*
Bloco de código que pode ser executado e reutilizado. Valores podem ser passador por uma função e a mesma retorna outro valor.*/

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(4) // 16
areaQuadrado(5) // 25
areaQuadrado(2) // 4

console.log(areaQuadrado(10))

function pi() {
  return 3.14
}

var total = 5 * pi();

console.log(total)

//parametros e argumentos
/*
ao criar uma função, você pode definir parâmetros.
ao executar uma função , você pode passar argumentos
*/

// peso e altura sao os parâmetros

function imc(peso, altura) {
  const imc = peso / (altura**2);
  return imc
}

imc(80, 1.80) // 80 e 1.80 sao os argumentos
imc(60, 1.70) // 60 e 1.70 sao os argumentos

// separar por virgula cara parametro. você pode definir mais de um parâmetro ou nenhum tambem.

console.log(imc(95, 1.87));

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'eu gosto do céu'
  } else if (cor === 'verde') {
    return ' eu gosto de mato'
  } else {
    return 'eu nao gosto de ninguem'
  }
}
console.log(corFavorita('azul'))

//argumentos podem ser funções
/*
chamadas de callback, geralmente são funções que ocorres após algum evento
*/

addEventListener('click', function(){
  console.log('cada click 1 robotico é morto')
})
//a função possui dois argumentos
//primeiro é a string 'click
//segundo é a função anônima

//funções anônimas sao aquelas em que o nome da função não é definido, escrito como function()   ou  () => {}

//pode ou não retornar um valor
/*
quando nao definimos o return, ela irá retornar undefined. o código interno da função é executado normalmente, independente de existir valor de return ou não.

*/

// valores retornados

/* 
uma função pode retornar qualquer tipo de dado e até outras funções
*/
function terceiraIdade(idade) {
  if(typeof idade !== 'number'){
    return 'informe a sua idade!';
  } else if(idade >=60){
    return true;
  }else {
    return false;
  }
}

//cuidado, retornar diferentes tipos de dados na mesma função nao é uma boa ideia

//escopo
/* 
variáveis e funções defininas dentro de um bloco {, não são visíveis fora dele */
var totalPaises = 193;
function precisoVisitar(paisesVisitados){
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises`
}
console.log(totalPaises); //erro, totalPaises nao definido

//escopo léxico
/*
funções conseguem acessar variáveis que foram criadas no contexto pai
*/

var profissao = 'Designer';

function dados() {
  var nome = 'jhonso';
  var idade = 55;
  function outrosDados() {
    var endereco = 'pato branco';
    var idade = 56;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados (); //retorna 'jhonso, 55, pato branco, Designer'
//outrosDados(); //retorna um erro

//hoisting

/*
antes de executar uma função, o JS 'move' todas as funções declaradas para a memoria
*/

imc1(80, 1.80); //imc aparece no console

function imc1(peso,altura){
  const imc = peso / (altura**2);
  console.log(imc1)
}

//EXERCICIO

//crie uma função para verificar se um valor é truthy
function isTruthy (dado) {
  return !!dado;
}

//crie uma função matemática que retorne o perimetro de um quadrado
//lembrando :perimetro é a soma dos quatro lados do quadrado
function perimetroQuadrado (lado){
  return lado * 4;
}
//crie uma função que retorne seu nome completo
//ela deve possuir os parametros: nome sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} + ${sobrenome}`;
}

//crie uma função que verifica se um numero é par 
function isEven(number) {
  var modulo = number % 2;
  if(modulo === 0) {
    return true;
  }else {
    return false;
  }
}

//crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function tipoDeDado(dado){
  return typeof dado;
}
//addeventlistener é uma função nativa do javascript
//o primeiro parametro é o evento que ocorre e o segundo o callback
//utilize essa função para mostrar no console o seu nome completo
//quando o evento scroll ocorrer
addEventListener('scroll', function(){
  console.log('vitor leandro')
})
//corrija o erro abaixo
var totalPaises1 = 193
function precisoVisitar1(paisesVisitados1) {
  return `ainda faltam ${totalPaises1 - paisesVisitados1} paises para visitar`
}

function jaVisitei(paisesVisitados1) {
  return `Já visitei ${paisesVisitados1} do total de ${totalPaises1} paises`
}

precisoVisitar1(20);
jaVisitei(20);

