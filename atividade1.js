//crie um algoritmo que imprime no console de 10 a 60, iterando a cada 5, 
//exceto para os numeros 35 e 45 que irão ser substituidos pela palavra "PULOU".

let index = 5
while(index <=55) { 
    index+=5
    
    if(index==35 || index==45){
        console.log("Pulou")
        continue
    }
    console.log(index)
    
}