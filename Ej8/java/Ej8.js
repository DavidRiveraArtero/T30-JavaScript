var mensaje = prompt("dame un numero entero")
var numero = parseInt(mensaje)

if (numero % 2 == 0){
    document.write("El numero " + numero + " es par")
}else{
    document.write("El numero " + numero + " es inpar")
}