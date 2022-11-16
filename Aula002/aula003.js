/* boolean simboliza o verdadeiro / falso */

/*const numero = 3

const NumeroPar = (numero % 2) === 0; /* % resto da divisão / = atribuição /== igualdade sem levar em conta parametros / === igualdade 
console.log(NumeroPar);

if (NumeroPar) {
    console.log ('é par')
    
} else {
  console.log ('é ímpar')
}
if (!NumeroPar) {
    console.log ('é ímpar')

}*/

const numero = 3;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
  console.log('O número é inválido');
} else if (numeroDivisivelPor5) {
  console.log('sim');
} else {
  console.log('não');
}


 
