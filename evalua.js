var nombre = prompt("Escribe tu nombre aquí: ");
var i = 0 ;
var c = 0 ;
alert("Bienvenid@, "+ nombre + ", al cuestionario sobre Turismo");
alert("Recuerda responder con la letra en MAYÚSCULAS");

var p1 = prompt("1. ¿En qué departamento se encuentra el lago Titicaca?\n A. Tacna\n B. Puno\n C. Cusco");
if(p1 == "A"){
    c=c+1
}else if (p1 == "B"){
    i=i+1
}else if(p1 == "C"){
    i=i+1
}else{
    alert("Esta respuesta no es válida")
}
var p2 = prompt("2-¿Desde qué parte del Perú se pueden avistar ballenas jorobadas?\n A. Lima e Ica\n B. Arequiupa y Tacna\n C. Piura y Tumbes");
if(p2 == "C"){
    c=c+1
}else if (p2 == "B"){
    i=i+1
}else if(p2 == "A"){
    i=i+1
}else{
    alert("Esta respuesta no es válida")
}
var p3 = prompt("3. Plato típico de la Selva peruana\n A. Tacacho con cecina\n B. Arroz con pollo\n C. Lomo saltado");
if(p3 == "A"){
    c=c+1
}else if (p3 == "B"){
    i=i+1
}else if(p3 == "C"){
    i=i+1
}else{
    alert("Esta respuesta no es válida")
}
if(c > i){
    document.write(nombre + ", lo has hecho bien<br>");
    document.write("Correctas: "+c+"<br>")
    document.write("Incorrectas: "+i+"<br>")
}else if(c < i){
    document.write(nombre + ", no estuviste bien<br>");
    document.write("Correctas: "+c+"<br>")
    document.write("Incorrectas: "+i+"<br>")
}else{
    document.write(nombre + ", has contestado a medias<br>");
    document.write("Correctas: "+c+"<br>")
    document.write("Incorrectas: "+i+"<br>")
}