var letras = ['T', 'R', 'W', 'A','G', 'M','Y','F','P','D','X','B','N', 'J','Z','S','Q','V','H','L','C','K','E','T']
var numerosDNI= prompt ("DAME TU DNI SIN LA LETRA");
var numeroDNI = parseInt(numerosDNI)

var letraDNI=prompt("DAME LA LETRA");
if (numeroDNI < 0){
    document.write("El numero es inferior a 0 ERROR")
}else if (numeroDNI > 99999999){
    document.write("El numero es demasiado grande ERROR")
}

var calcularLetraDNI = numeroDNI % 23

if (letras[calcularLetraDNI] == letraDNI){
    document.write("EL DNI QUE ME HAS PROPORCIONADO ESTA CORRECTO")
}else{
    document.write("EL DNI QUE ME HAS PROPORCIONADO ES INCORRECTO")
}
