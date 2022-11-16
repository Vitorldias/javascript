/*
1) faça um algorítmo que dado as 3 notas tiradas por um aluno em um semestreda faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3 ) / 3;

Classificação:
Média menor que 5, reprovação;
Média entre 5 e 7, recuperação;
Média acima de 7, passou de semestre;
*/

const nota1 = 7;
const nota2 = 7;
const nota3 = 8;
const Media = (nota1 + nota2 + nota3) / 3;

console.log(Media.toFixed(1))

if (Media < 5) {
  console.log('Reprovado');
} else if (Media >= 5 && Media <= 7) {
  console.log('Recuperação');
} else if (Media > 7) {
  console.log('Passou de semestre');
}



