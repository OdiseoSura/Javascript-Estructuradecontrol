let puntuacion = Number(prompt("Ingrese su puntuacion: "));
             
switch(true){
    case puntuacion >= 60 && puntuacion <=100:
     alert("Calificado");
        break;
    case puntuacion < 60 && puntuacion >=0:
    alert("No calificado");
        break;
    default:
    alert("Dato Invalido");
        break;
}