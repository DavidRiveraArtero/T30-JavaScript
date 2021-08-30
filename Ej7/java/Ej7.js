var numero = prompt("DAME UN NUMERO")
var numeros = parseInt (numero)
var resultado = 1
for (var x =numeros; x > 0; x--){
    resultado *= x 
}
console.log(resultado)
