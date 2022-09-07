addEventListener("DOMContentLoader", (e)=>{

    //Ejercicio 5
    //Escribir un programa que calcule la longitud y el área de una circunferencia: Radio = 4
    //Longitud de la circunferencia = 2 * PI * radio
    //Área de la circunferencia = PI * radio˄2

    let radio, long,area

    radio = Number(prompt("Ingrese el radio"))
    long = 2*Math.PI*radio
    area = Math.PI*radio**2


    alert(`Longitud de la circunferencia: ${long}`)
    alert(`Area de la circnferencia: ${area}`)




})