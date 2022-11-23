/*
1- crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto medio de combustível por kilometro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustivel nos dê o valor gasto em reais para realizar este percurso.
*/

class carros {
  marca;
  cor ;
  gasto;

  constructor (marca, cor, gasto) {
    this.marca = marca;
    this.cor = cor;
    this.gasto = gasto;
  }

    calcularViagem (distancia, precoComb) {
      return distancia * this.gasto * precoComb;

    }

       
}

const m3 = new carros ('Bmw', 'amarelo',1/12)
const focus = new carros ('Ford','Cinza' , 1/8)

console.log('na viagem sera gasto um total de R$ ',m3.calcularViagem(70,5));
console.log('na viagem sera gasto um total de R$ ' ,focus.calcularViagem(70,5));




