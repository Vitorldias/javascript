// Document Object Model (DOM)

/*
é uma interface que representa documentos HTML e XML através de objetos. com ela é possivel manipular a estrutuda, estilo e conteudo destes documentos

*/

console.log(window);
//window é o objeto global do browser
//possui diferentes metodos e propriedades

window.innerHeight; // retorna a altura do browser

//ao inspecionar elemento com o chrome, voce esta vendo a representação oficial do DOM

//Node

/*
Toda tag html é representada pelo obeto element e por isso herda os seus métodos e propriedades. element é um tipo de objeto node.
*/

const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto
titulo.classList; // retorna as classes
titulo.id; // retorna o id
titulo.offsetHeight; // retorna a altura do elemento

titulo.addEventListener('click', callback);
//ativa a função callback ao click no titulo

//Exerciciox

//retorne o url da pagina atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina);

//selecione o primeiro elementod a paginaque possua a cclasse ativo
const elementoAtivo = document.querySelector('.ativo')
//retorne a linguagem do navegador
const linguagem = window.navigator.language
console.log(linguagem)
//retorne a largura da janela
const windowWidth = window.innerWidth;