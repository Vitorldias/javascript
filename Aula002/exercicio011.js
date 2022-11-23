/*
Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior número sorteado.

dados de entrada:
5
50
10
98
23

saida
98
*/

const { gets, print } = require ('./aula007');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
  const numeroSorteados = gets();
  numerosSorteados.push(numeroSorteados);
  
}

print(numerosSorteados);

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
  const numeroSorteados = numerosSorteados [i];
  if (numeroSorteados > maiorValor) {
    maiorValor = numeroSorteados;
  }
  
  
}

print (maiorValor);