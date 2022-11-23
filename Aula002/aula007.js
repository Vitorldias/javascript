const entradas = [10, ,33, 56, 91, 55, 5, 50, 10, 100, 98, 23];
let i = 0;

function gets () {
  const valor = entradas[i];
  i++;
  return valor;
}

function print(texto) {
  console.log(texto);
}

module.exports = { gets, print };