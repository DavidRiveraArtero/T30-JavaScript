var mensaje = prompt("Pasame una cadena de texto")
var opcion1 = 0

function comprovarTexto(mensaje) {
    const regxs = {
      "lower": /^[a-z0-9 ]+$/,
      "upper": /^[A-Z0-9 ]+$/,
      "upperLower": /^[A-Za-z0-9 ]+$/
    }
   
    if (regxs.lower.test(mensaje)) return '0';
    if (regxs.upper.test(mensaje)) return '1';
    if (regxs.upperLower.test(mensaje)) return '2';
    return -1;
  }


if (comprovarTexto(mensaje) == '0' ){
    document.write("TODO EL TEXTO ESTA EN MINUSCULAS")
}else if(comprovarTexto(mensaje) == '1' ){
    document.write("TODO EL TEXTO ESTA EN MAYUSCULAS")
}else if (comprovarTexto(mensaje) == '2' ){
    document.write("ES UNA COMBINACION DE AMBAS")
}else{
    document.write("ERROR")
}