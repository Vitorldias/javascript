/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetue o calculo adequado.

Código condição de pagamento
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou Pix, recebe 15% de desconto;
- Em duas vezes, preço normal da etiqueta sem juros;
- Acima de duas vezes, preço normal da etiqueta mais juros de 10%;
*/

const etiqueta =100;
const CondPagto = 4;
const aVistDeb = etiqueta - (10/100 * etiqueta) ;
const aVistDinPix = etiqueta - (15/100 * etiqueta) ;
const DuasX = etiqueta;
const AcimaDuasX = etiqueta + (10/100 * etiqueta);

if (  CondPagto == 1 ) {
    console.log('O valor a ser pago é: R$',aVistDeb)
} else if (CondPagto == 2 ) {
    console.log('O valor a ser pago é: R$',aVistDinPix )
} else if (CondPagto == 3 ) {
    console.log('O valor a ser pago é: R$',DuasX)
} else if (CondPagto == 4 ) {
    console.log('O valor a ser pago é: R$', AcimaDuasX)
}

