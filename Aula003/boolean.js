var possuiGraduacao = true;
var possuiDoutorado = false ;
if(possuiGraduacao) {
  console.log('é verdadeiro');
}else if (possuiDoutorado) {
  console.log('é falso');
} else {
  console.log('nao possui nada')
}


var nome = 'vitor';

if(nome) {
  console.log(nome);
} else {
  console.log('nao tem');
}

//existem valores que retornam true e outros false quando verificados em uma expressao booleana

/*falsy
if(false)
if(0)
if(NaN)
if(null)
if(undefined)
if('') ou "" ou ``

todo resto é truthy 

//Truthy
if(true)
if(1)
if(' ')
if('vitor')
if(-5)
if({})
*/

//o operador !, nega uma operação booleana. ou seja. !true é igual a false
/*
if(!true); // false 
if(!1); //false
if(!''); //false
if(!undefined); //true 
if (!! ' '); //true
if(!!''); //false 
Dica: você pode utilizar o !! para verificar se uma expressão é truthy ou falsy
*/

//operadores de comparação

/* 
o == faz uma comparação nao tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado de ser o mesmo quando usamos ===

10 == '10'; // true
10 == 10 ; // true
10 === '10'; // false
10 === 10; // true
10 != 15; // true
10 != '10'; // false 
10 !== '10'; // true

*/

//operadores logicos && e

/* 
&& compara se uma expressão 'e' a outra é verdadeira

true && true; // true
true && false; // false
false && true; // false 
'Gato' && 'Cão'; // 'Cão'
(5-5) && (5+5); // 0
'Gato' && false; // false
(5>=5) && (3<6); // true

se ambos os valores forem true ele irá retornar o último valor verificado se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos
*/

// operadores logicos || ou
/* 

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5-5) || (5+5); // 10
'Gato' || false; // 'Gato'
(5>=5) || (3<6); // true

Retorna o primeiro valor true que encontrar

*/

//Switch

/*
com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. o valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.

var corFavorita = 'Azul'

switch (corFavorita) {
  case 'Azul':
  console.log('olhe para o céu');
  break;
  case 'Vermelho':
    console.log('Olhe para rosas');
  break;
  case 'Amarelo':
    console.log('Olhe para o sol');
  break;
}
*/

// verifique se a sua idade é maior do que de algum parente
// dependendo do resultado coloque no console 'é maior', 'é igual'.
var idadeVitor = 28;
var idadeTorvi = 28;

if (idadeVitor > idadeTorvi) {
  console.log('Vitor é mais velho');
} else if (idadeVitor === idadeTorvi) {
  console.log('tem a mesma idade');
} else {
  console.log('Torvi é mais velho');
}
//qual valor é retornado na seguinte expressão?
var expressao = (5-2) && (5-' ') && (5-2);
console.log(expressao)

//verifique se as seguintes variáveis são truthy ou falsy
var nome = 'vitor';
var idade = 28;
var possuiDoutorado1 = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(nome,idade,possuiDoutorado1,empregoFuturo,dinheiroNaConta)

//Compare o total de habitantes do Brasil com China (valor em milhoes)

var brasil = 207;
var china = 1340;

if( brasil > china ) {
  console.log('brasil tem mais habitantes')
} else {
  console.log('brasil tem menos habitantes')
}

// o que irá aparecer no console?
if (('Gato' === 'gato') && (5>2)) {
  console.log('verdadeiro');
} else {
  console.log('Falso');
}

// o que ira aparecer no console? 
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato && cão');
} else {
  console.log('falso')
}
