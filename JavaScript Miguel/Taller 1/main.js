addEventListener("DOMContentLoader", (e)=>{

/*
    Ejercicio 13
    Realice un algoritmo que a partir de proporcionarle la velocidad de un automóvil expresada en
    kilómetros por hora, proporcione la velocidad en metros por segundos
*/


let velocidad, r

    velocidad = Number(prompt("Ingrese la velocidad"))

    r = velocidad / 3.6

    alert(`Velocidad ${r}[m/s]`)
})