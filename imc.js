// Crea una función que calcule el índice de masa corporal (IMC)
//  de una persona a partir de su altura en metros y 
// peso en kilogramos, que se recibirán como parámetros.

function imc(altura,peso) {
    altura = prompt("Ingrese su altura:");
    peso = prompt("Ingrese su peso:");
    let indice = peso / (altura ** 2);    
    alert(indice);
}

imc();