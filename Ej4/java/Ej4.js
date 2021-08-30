var lista = [true, 5, false, "holaaa", "adioss", 2]

texto1 = lista[3]
texto2 = lista[4]
texto2.length

//COMPARAR EL TEXTO
if (texto1.length > texto2.length){
    console.log(texto1 + " es más grande")
}else if (texto2.length > texto1.length){
    console.log(texto2 + " es más grande")
}else{
    console.log("Son iguales")
}

//BOLEANOS 
salir = lista[2]
var cont = 0
while (salir == lista[2]){
    console.log(cont)
    cont += 1;
    if (cont == 3){
        //SI CONTADOR ES IGUAL A 3 SALIR SERA IGUAL A TRUE
        salir = lista[0]
    }
}

//OPERACIONES MATEMATICAS
var suma = lista[1] + lista[5]
console.log("El Resultado de la SUMA ES: " + suma)

var resta = lista[1] - lista[5]
console.log("El Resultado de la RESTA ES: " + resta)


var multipli = lista[1] * lista[5]
console.log("El Resultado de la multipli ES: " + multipli)

var divi = lista[1] / lista[5]
console.log("El Resultado de la divi ES: " + divi)

var modulo = lista[1] % lista[5]
console.log("El Resultado del modulo ES: " + modulo)
