const numero = parseInt(prompt('Escolha um numero de 1 a 3'))

switch (numero){
    case 1:
        console.log('Um')
    break

    case 2:
        console.log('Dois')
    break

    case 3:
        console.log('Três')             
}

==================================================================

var numero = parseInt(prompt('Escolha um numero de 1 a 10'))
if (numero >10){
     console.log ('seu numero é maior que 10')   
}else{
    console.log ('seu numero não é maior que 10')
}

==================================================================

const dia = parseInt(prompt('Escolha um dia da semana (número de 1 a 7)'))

switch (dia){
    case 1:        
        console.log('Domingo')
    break
    case 2:
        console.log('Segunda')
    break
    case 3:
        console.log('Terça')
    break
    case 4:
        console.log('Quarta')
    break
    case 5:
        console.log('Quinta')
    break
    case 6:
        console.log('Sexta')
    break
    case 7:
        console.log('Sabado')
    break
    default:
        console.log('Número invalido, escolha um número de 1 a 7')    
    
}

==================================================================

const cor = prompt('Escolha uma cor (vermelho, verde, azul)')   

switch(cor){
    case 'vermelho':        
        console.log('Você escolheu vermelho')
    break 
    case 'verde':
         console.log('Você escolheu verde')
    break
    case 'azul':
         console.log('Você escolheu azul')
    break
    default:
        console.log('Cor invalida')   
}

=====================================================================

const numero1 = parseInt(prompt('Informe o numero'))
const numero2 = parseInt(prompt('Informe o numero'))

if (numero1 % 2 == 0 && numero2 % 2 == 0){
    console.log ("Ambos os números são pares.");  
}

=============================================================== 

 let num1 = parseInt(prompt('informe um numero'));
 console.log(`Número gerado: ${num1}`);
 
 let num2 = parseInt(prompt('informe um numero'));
console.log(`Número gerado:${num2}`);

console.log((num1 % 2 !== 0 || num2 % 2 !== 0) ? "Um dos números não é par ou os dois!" : "Ambos os números são pares.");

=====================================================================

let operacao = prompt("Escolha uma operação (+, -, *, /):");

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

let resultado;

if (operacao === '+') {
    resultado = num1 + num2;
} else if (operacao === '-') {
    resultado = num1 - num2;
} else if (operacao === '*') {
    resultado = num1 * num2;
} else if (operacao === '/') {
    if (num2 === 0) {
        resultado = "Erro: Divisão por zero!";
    } else {
        resultado = num1 / num2;
    }
} else {
    resultado = "Operação inválida!";
}
console.log(`Resultado: ${resultado}`);

=====================================================================

const nota = parseInt(prompt("Qual foi a nota"));

if (nota >= 0 && nota <=4.9){
    console.log ('Nota baixa')
}
else if (nota >= 5 && nota <=6.9){
    console.log ('Nota méia')
}
else if (nota >= 7 && nota <= 10){
    console.log ('Nota alta')
}else {
    console.log ('nota invalida')
}

const numero1 = parseInt(prompt('Informe o numero'))


if (numero1 % 2 == 1){
    console.log('seu numero é impar')
} else {
    console.log('seu numero é par')
}

========================================================================


