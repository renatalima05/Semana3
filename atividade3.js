//Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, 
//se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

let number1 = 6, number2 = 2;
const resultado = number1 / number2;
const resto = number1 % number2;
 

if (resto ==0) {
    console.log(`é par`)

}

else {
    console.log(`O resultado é ${resultado}`)

}