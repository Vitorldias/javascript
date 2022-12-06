/*var idade = 28;
var gols = 1000;
var pi = 3.14; //ponto para decimal
var exp = 2e10 // 20000000000*/

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; //200
var divisao = 100 / 2; //50
var expoente = 2**4; // 16
var modulo = 14 % 5; // 4

//soma em string serve para concatenar 

var soma1 ='100' + 50; //10050
var subtracao1 = '100' - 50; //50
var multiplicacao1 = '100' * 2; //200
var divisao1 = 'comprei 10' / 2 //NaN not a number

// a ordem importa 

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; //50
var total3 = 20 / 2 * 5 ; // 50
var total4 = 10 + 10 * 2 + 20 / 2; //40 

//parenteses para priorizar uma expressão

var incremento = 5;
console.log(incremento++); //5
console.log(incremento); //6

var incremento2 = 5;
console.log(++incremento2);// 6
console.log(incremento2); //6

//mesma coisa para o decremento --x

var frase = 'isso é um teste';
+frase; //NaN
-frase; // Nan

var idade = 28;
+idade; //28(numero)
-idade; // -28(numero)
console.log(+idade +5); //33

var possuiFaculdade = true;
console.log(+possuiFaculdade); //1

//qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; // 35
console.log(total)

//crie duas expressões que retornem NaN
var numeroErro1 = 'surucucu' / 23;
var numeroErro2 = 'jacaranda' * 9 ; 
console.log(numeroErro1, numeroErro2)
//somar a string '200' cm o numero 50 e retornar 250

var valor1 = +'200'
var valor2 = 50
var somaString = valor1 + valor2;
console.log(somaString)

//incremente o numero 5 e tetorne seu valor incrementado
var x = 5 
console.log(++x)
//como dividir o peso por 2

var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade // '80kg'

console.log(peso)