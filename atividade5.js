//5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

//a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
//b) Deverá ser possível passar 2 números para a operação escolhida
//c) Deverá retornar o resultado e imprimir no console


function conta(operacao, resultado){
    let numero1 = 50, numero2 = 25;

    switch (operacao){
        case 'soma': 
            resultado = numero1 + numero2;
            break

        case 'subtração': 
            resultado = numero1 - numero2;
            break    

        case 'divisão': 
            resultado = numero1 / numero2;
            break 

        case 'multiplicação': 
            resultado = numero1 * numero2;
            break 
            
        default:
            console.log(`operação não é valida`)
    }

    return `O resultado é ${resultado}`


}

console.log(conta('multiplicação'))