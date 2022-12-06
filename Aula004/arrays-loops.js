//Arrays

/*
é um grupo de valores geralmente relacionados. servem para guardarmos diferentes valores em uma unica variavel.
*/

var videoGames = ['switch','ps4', 'xbox','PC master race'];

videoGames[0] //switch
videoGames[2] // xbox

//acesse um elemento de array utilizando [n]

//metodos e propriedades de uma array

var videoGames = ['switch','ps4', 'xbox','PC master race',];
videoGames.pop(); // remove o ultimo item e retorna ele
videoGames.push('3ds'); //adiciona ao final da array
videoGames.length; //4

//existem diversos outros métodos como map, reduce, forEach e mais que veremos mais a frente.


//for loop

/*
fazem algo repetidamente até que uma condição seja atingida.
*/

for(var numero =0; numero < 10; numero++){
  console.log(numero)
} // retorna de 0 a 9 no console

//for loop possui 3 partes, inicio, condição e incremento

//while loop

var i = 10;
while (i > 0) {
  console.log(i);
  i--;
}
 //retorna de 0 a 9 no console, o for loop é mais comum

 var videoGames = ['switch','ps4', 'xbox','PC master race', 'cudicao'];
 for (var i =0; i < videoGames.length; i++){
  console.log(videoGames[i]);
 }

 //break 
 /*
 o loop irá parar caso encontre a palavra break
 */

 var videoGames = ['switch','ps4', 'xbox','cudicao','PC master race', 'cudicao'];
 for (var i =0; i < videoGames.length; i++){
  console.log(videoGames[i]);
  if(videoGames[i] === 'PC master race'){
    break;
  }
 }

 //forEach

 /*
 forEach é um metodo que executa uma função para cada item da array, é uma forma mais simples de utilizarmos um loop com arrayz (ou array-like)

 */

 var videoGames = ['switch','ps4', 'xbox','cudicao','PC master race', 'cudicao'];
 videoGames.forEach(function(item, index){
  console.log(item, index);
 })
 // o argumento item sera atribuido dinamicamente, podemos passar os seguintes parametros item, index e array

 //nao se confunda com a sintaxe

 var numero =0;
 var maximo = 5;
 for(;numero < maximo;) {
  console.log(numero)
  numero++
 }

 //nao acontelho escrever da forma acima, mas funciona normalmente

 //EXERCICIOS

 //CRIE UMA ARRAY COM OS ANOS QUE O BRASIL GANHOU A COPA
 //1959, 1962, 1970, 1994, 2002
var brasilCampeao = [1959, 1962, 1970, 1994, 2002];
 //INTERAJA COM O ARRAY UTILIZANDO UM LOOP, PARA MOSTRAR NO CONSOLE A SEGUINTE MENSAGEM, `O BRASIL GANHOU A COPA DE ${ANO}`
for (var i = 0; i < brasilCampeao.length; i++)
console.log(`o Brasil ganhou a copa de ${brasilCampeao[i]}`);
 //INTERAJA COM UM LOOP DE FRUTAS ABAIXO E PARE AO CHEGAR EM PERA
 var frutas = ['banana','maça','pera','uva','melancia']
  for (var fruta =0; fruta < frutas.length; fruta++) {
    console.log(frutas[fruta]);
    if(frutas[fruta] === 'pera'){
      break;
    }
  }
 //coloque a ultima fruta da array acima em uma variavel.
 //sem remover a mesma da array

 var ultimaFruta = frutas[frutas.length - 1 ];
