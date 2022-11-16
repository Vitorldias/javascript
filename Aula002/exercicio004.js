/*
2) O IMC- Indice de Massa Cosporal é um critério da Organização mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição
- Abaixo de 18.5 Abaixo do peso:
- entre 18.5 e 25 peso normal:
- entre 25 e 30 Acima do peso:
- entre 30 e 40 Obeso:
- Acima de 40 Obesidade Grave:

*/

const peso = 80;
const altura = 1.86;
const imc = peso / Math.pow(altura,2);


console.log(imc.toFixed(1))

if (imc < 18.5) {
  console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
  console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
  console.log('Acima do peso');
} else if (imc >= 30 && imc < 40) {
  console.log('Obeso');
} else if (imc >= 40) {
  console.log('Obesidade Grave');
}