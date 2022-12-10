let tipo_vehiculo = (prompt("Ingrese su tipo de vehiculo\nparticular, autobus, microbus, mototaxi, moto, autobus, otro."));


switch(tipo_vehiculo) {
    case "particular":
      alert("Usted debe pagar: $0.75")
    break;

    case "autobus":
      alert("Usted debe pagar: $1.50")
     break;

    case "microbus":
      alert("Usted debe pagar: $1.25")
   break;

    case "mototaxi":
     alert("Usted debe pagar: $0.50")
    break;

    case "moto":
      alert("Usted debe pagar: $0.30")
    break;
    
    case "autobus":
      alert("Usted debe pagar: $1.50")
    break;

    case "otro":
    alert("Usted debe pagar: $3.00")
    break;
               default:        
}