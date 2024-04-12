alert("Ingrese el plan que desea adquirir, para salir del menú escriba 'ESC'");
let seleccionarPlanes = "";
let seleccionarMeses;
let total = 0;

    // PAGO DE SERVICIOS

    while (seleccionarPlanes !== "ESC") {
        seleccionarPlanes = prompt("¿Qué servicio va a desear? 1 mes de PREMIUM = 1000$, 1 mes de BUSINESS = 2000$, 1 mes de DELUXE = 3500$ PD: escriba el nombre del servicio en minúscula.");

        if (seleccionarPlanes !== "premium" && seleccionarPlanes !== "business" && seleccionarPlanes !== "deluxe" && seleccionarPlanes !== "ESC") {
            let vuelveAPreguntar = seleccionarPlanes
        }
        else {
            switch (seleccionarPlanes) {
                case "premium":
                    do {
                        seleccionarMeses = promptMeses("PREMIUM");
                        if (seleccionarMeses <= 0 || isNaN(seleccionarMeses)) {
                            alert("Por favor, ingrese un número de meses válido para el plan PREMIUM.");
                        }
                    } while (seleccionarMeses <= 0 || isNaN(seleccionarMeses));
                    total += meses(seleccionarMeses, 1000);
                    break;

                case "business":
                    do {
                        seleccionarMeses = promptMeses("BUSINESS");
                        if (seleccionarMeses <= 0 || isNaN(seleccionarMeses)) {
                            alert("Por favor, ingrese un número de meses válido para el plan BUSINESS.");
                        }
                    } while (seleccionarMeses <= 0 || isNaN(seleccionarMeses));
                    total += meses(seleccionarMeses, 2000);
                    break;

                case "deluxe":
                    do {
                        seleccionarMeses = promptMeses("DELUXE");
                        if (seleccionarMeses <= 0 || isNaN(seleccionarMeses)) {
                            alert("Por favor, ingrese un número de meses válido para el plan DELUXE.");
                        }
                    } while (seleccionarMeses <= 0 || isNaN(seleccionarMeses)); 
                    total += meses(seleccionarMeses, 3500);
                    break;

                case "ESC":
                    break;

                default:
                    alert("Por favor, seleccione un servicio válido.");
                    break;
            }

            break;
        }

    }

alert("El total a pagar es: $" + total + ", Gracias por su compra!");


    
//Declaracion de funciones
function meses(meses, precio) {
    return meses * precio;
}

function promptMeses (plan) {    
    return parseInt(prompt("Ha seleccionado el plan " + plan + ", ¿Cuántos meses va a pagar?"));
}
