//Comentários

/*
servem para explicar o codigo
*/


// comentario em linha

/*
comentario em diversas linhas
 */

//operadores de atribuição

//podem funcionar como formas abreviadas

var x = 5;
var y = 10;

x+=y; // x = x + y (15)
x-=y; //x = x - y (-5)
x*=y; //x = x * y (50)
x/=y; //x = x / y (0.5)
x%=y; //x = x % y (0)
x**=y; // x = x ** y (9765625)


//operador ternário 

//abreviação de condicionais com if e else

var idade = 19;
var podeBeber = (idade >= 18) ? 'pode beber' : 'nao pode beber';
console.log(podeBeber)

//condição ? true : false 

//geralmente utilizado quando precisamos atribuir um valor para uma variavel, dependendo de uma condição

//exercicios

//some 500 ao valor de scroll abaixo,
//atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;


//atribua true para a variavel darCredito,
//caso o cliente possua carro e casa.
//e false caso o contrario

var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa) ;