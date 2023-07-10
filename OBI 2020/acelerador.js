//LINK DA QUESTÃO: https://olimpiada.ic.unicamp.br/pratique/p2/2020/f1/acelerador/


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



var disTotal;
const disSensor1 = 3, disSensor2 = 4, disSensor3 = 5;

scanf("%d", "disTotal");


disTotal = disTotal - 3 // Retiramos a diferença da entrada
if((disTotal - 5) % 8 == 0){
    printf("%d\n", 3);

}
else if((disTotal - 4) % 8 == 0){
    printf("%d\n", 2);

} else{
    printf("%d\n", 1)

}