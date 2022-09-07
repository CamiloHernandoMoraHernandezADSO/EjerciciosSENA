addEventListener("DOMContentLoader", (e)=>{

/*
    Ejercicio 19
    Un estudiante realiza cuatro exámenes. Realizar el pseudocódigo que representen el algoritmo
correspondiente para obtener el promedio de las calificaciones obtenidas. las calificaciones van 1 a 5
puntos.
*/

    let ex1,ex2,ex3,ex4,promedio

    ex1 = Number(prompt("Ingrese su examen"))
    ex2 = Number(prompt("Ingrese su examen"))
    ex3 = Number(prompt("Ingrese su examen"))
    ex4 = Number(prompt("Ingrese su examen"))

    promedio = (ex1 + ex2 + ex3 + ex4)/4
    alert(`Promedio: ${promedio}`)



})