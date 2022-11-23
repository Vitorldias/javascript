/* 2) crie uma classe para representar pessoas.
para cada pessoa teremos os atributos nome. peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu imc (imc = peso / (altura * altura));
instancie uma pessoa chamada josé que tenha 70kg e 1,75 de altura e peça ao jose para dizer o valor do seu imc; */

class pessoa {
  nome;
  peso;
  altura;

  constructor (nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc () {
    return this.peso / Math.pow(this.altura,2);
  }

  classificarImc () {
  const imc = this.calcularImc();
  if (imc < 18.5) {
    return ('Abaixo do peso');
  } else if (imc >= 18.5 && imc < 25) {
    return ('Peso normal');
  } else if (imc >= 25 && imc < 30) {
    return ('Acima do peso');
  } else if (imc >= 30 && imc < 40) {
    return ('Obeso');
  } else if (imc >= 40) {
    return ('Obesidade Grave');
  }
  }

}

const jose = new pessoa ('Jose', 70, 1.75);
const vitor = new pessoa ('Vitor', 105, 1.86)
console.log('O imc de jose é ',jose.classificarImc(this.peso, this.altura));
console.log('O imc do vitor é ',vitor.classificarImc());