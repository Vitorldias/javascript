/*
Faça um programa para calcular o valor de uma viagem

você terá 5 variáveis. sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustivel que está no seu carro;
4 - gasto médio de combustivel do carro por km;
5 - distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const EtanolV = 3;
const GasolinaV = 6;
const GastoMedComb = 13;
let DistVia = 250;
let CarFuel = 'Etanol';

const litrosConsumidos = DistVia / GastoMedComb;

if (CarFuel === 'Etanol') {
  const ValorVia = litrosConsumidos * EtanolV
  console.log(ValorVia.toFixed(2));
} else {
  const ValorVia = litrosConsumidos * GasolinaV
  console.log(ValorVia.toFixed(2));
};

