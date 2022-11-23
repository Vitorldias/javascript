function digiteSeuNome(nome) {
 return 'Meu nome é ' + nome;
}


function MaiorIdade (idade) {
  if (idade >= 18 ) {
    console.log(digiteSeuNome ('Vitor ') + 'Você é maior de idade');
  } else if (idade < 18 ) {
    console.log('Você é menor de idade')
  }
}

MaiorIdade(19);