const dias = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado"

]

function sumarDias(date, number) {
    let day=date.getDay()
    let diaFinal = day + number;
    while (diaFinal > 6) {
        diaFinal = diaFinal - 7
    }
    console.log(dias[diaFinal])
}

sumarDias(new Date(), 10)
