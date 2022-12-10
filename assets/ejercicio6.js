var cantidad_imp = Number(prompt("Ingrese la cantidad de impresoras: "))
var forma_pago = prompt("Ingrese su forma de pago: ")
const precio_imp = 70
var compra, total_pagar, desc

switch(forma_pago){

    case "efectivo":
        compra =  precio_imp*cantidad_imp;
        desc = compra*0.10;
        total_pagar = compra-desc;
    break;

    case "tarjeta":
        compra =  precio_imp*cantidad_imp;
        desc = compra*0.05;
        total_pagar = compra-desc;
    break;

    case "cupon":
        compra =  precio_imp*cantidad_imp;
        desc = compra*0.15;
        total_pagar = compra-desc;
    break;
}
alert("Cantidad de impresoras: " + cantidad_imp)
alert("Su forma de pago es: " + forma_pago)
alert("Total a pagar: " + total_pagar)





