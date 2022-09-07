addEventListener("DOMContentLoader", (e)=>{

/*
    Ejercicio 16
    Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. Dicha calificación se
compone de los siguientes porcentajes:
• 55% del promedio final de sus calificaciones de los tres(3) parciales.
• 30% de la calificación examen final y
• 15% de la calificación trabajo final.
*/

    let p1,p2,p3,exF,tF,promPar,promF

    p1 = Number(prompt("Ingrese su nota parcial "))
    p2 = Number(prompt("Ingrese su nota parcial "))
    p3 = Number(prompt("Ingrese su nota parcial "))
    exF = Number(prompt("Ingrese su nota del examen "))
    tF = Number(prompt("Ingrese su nota Trabajo final "))

    promPar = (p1 + p2 + p3)/3
    promF = promPar*0.55 + exF * 0.30 + tF * 0.15
    
    alert(`Nota final: ${promF}`)



})