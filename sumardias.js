const dias = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo",

]

function sumarDias(day, number) {
    let ndia = dias.indexOf(day)
    console.log(ndia)
    let diaFinal = ndia + number;
    console.log(diaFinal)
    if (diaFinal>=7){
        while (diaFinal > 6) {
            diaFinal = diaFinal - 7
        }
    }
    console.log(dias[diaFinal])
}

sumarDias('domingo', 0)
