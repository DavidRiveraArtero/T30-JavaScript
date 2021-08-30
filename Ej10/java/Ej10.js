function comprovar(mensaje){
    var mensaje2 = mensaje.split("").reverse().join("")

    return (mensaje === mensaje2) ?"Es palidromo":"No es palidromo"

}

var mensaje = prompt("DAME UN PALINDROMO")

console.log(comprovar(mensaje))