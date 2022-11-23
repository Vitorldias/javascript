const { gets, print } = require ('./aula007');

const quantidadeDeAlunos = gets();

let maiorValor = 0;
for (let i = 0; i < quantidadeDeAlunos; i++) {
  const numeroSorteados = gets();
  if (numeroSorteados > maiorValor) {
    maiorValor = numeroSorteados;
  }
  
}

print (maiorValor);

