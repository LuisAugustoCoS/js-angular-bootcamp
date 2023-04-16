/* ESTRUTURAS CONDICIONAIS */
    /* TIPO DE DADO BOOLEAN */
    const num = 1;
    const numeroPar = (num % 5) === 0;
/*TRUE ou FALSO*/
    console.log(numeroPar);
/*
= atribuição 
== compara o tipo
=== compara o tipo e o valor
*/

/* ESTRUTURA CONDICIONAL */
if(num === 0){
    console.log("numero  invalido")
}else if(num === 5){
    console.log("sim é igual a 5")
}else{
    console.log('não é igual a 5')
}
/* DESAFIO */
const vCoA = 5.79;
const vCoG = 7;
const tC = 'alcoo0l';
let vM = 10;
let dK = 100;
if(tC ==='alcool'){
    console.log((dK/vM)*vCoA);
}else{
    console.log((dK/vM)*vCoG);
}