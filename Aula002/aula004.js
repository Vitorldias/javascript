

/*function sayMyName(name){
    console.log('your name is ' + name);
}

sayMyName('torvi');
sayMyName('vitor');*/

/*function quadrado(valor){
   return valor * valor;
}

const quadradoDeDez = quadrado(100);
console.log(quadradoDeDez);*/

/*function incrementarJuros (valor, percentualJuros){
  const valorDeAcrecimo =(percentualJuros / 100) * valor;
  return valor + valorDeAcrecimo;
}

console.log(incrementarJuros(100,10));
console.log(incrementarJuros(100,15));
console.log(incrementarJuros(100,20));*/

/*function main ( ) {
  console.log('programa principal');
}*/

function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 25) {
    return 'Peso normal';
  } else if (imc >= 25 && imc < 30) {
    return 'Acima do peso';
  } else if (imc >= 30 && imc < 40) {
    return 'Obeso';
  } else if (imc >= 40) {
    return 'Obesidade Grave';
  }
}

(function (){
  const peso = 80;
  const altura = 1.86;
  const imc = calcularImc(peso, altura);
  console.log(imc.toFixed(1));
  console.log(classificarImc(imc));
})();





