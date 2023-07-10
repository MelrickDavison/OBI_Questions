//LINK para a questão: https://olimpiada.ic.unicamp.br/pratique/p2/2019/f2/supermercado/


// cabeçalho para incluir printf, scanf e fgets
// em programas javascript

// var scanf_stub = require('scanf-printf-obi').scanf,
//     printf_stub = require('scanf-printf-obi').sprintf,
//     fgets_stub = require('scanf-printf-obi').fgets

// function scanf(format) {
//     var res = scanf_stub.apply(this, Array.prototype.slice.call(arguments, 0));
//     eval(res);
// }

// function printf(args){
//     var res = printf_stub.apply(this, Array.prototype.slice.call(arguments, 0));
//     process.stdout.write(res);
// }

// function fgets(args){
//     var res = fgets_stub.apply(this, Array.prototype.slice.call(arguments, 0));
//     eval(res);
// }
// final de cabeçalho

var index, bits, gramas, valorAtual, menorValor  = null ;
var i = 0;
scanf("%d", "index");

while(i < index){
    scanf("%d %d", "bits", "gramas")

    valorAtual = (bits * 1000)/gramas
    if(i == 0){
        menorValor = valorAtual
      }
    if(valorAtual < menorValor){
        menorValor = valorAtual;
    }
    i++
}

printf("%d", menorValor)