var index = 1, bits = 2, gramas = 100, valorAtual, menorValor = null;
var i = 0;


while(i < index){
  if(i == 0){
    menorValor = valorAtual
  }
    valorAtual = (bits * 1000)/gramas
    if(valorAtual < menorValor){
        menorValor = valorAtual;
    }
    i++
}

console.log(menorValor)