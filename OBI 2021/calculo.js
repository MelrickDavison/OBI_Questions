//Link: https://olimpiada.ic.unicamp.br/pratique/p2/2021/f2/calculo/



var s, a, b, quant = 0, num, soma = 0;

scanf("%d%d%d", "s", "a", "b");

while(a <= b){
   num = a.toString();
   for(let i = 0; i < num.length; i++){
    soma += parseInt(num[i])
   }
    if(soma == s){
        quant++;
    }
    soma = 0
    a++;
}

printf("%d", quant);