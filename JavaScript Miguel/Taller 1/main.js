addEventListener("DOMContentLoader", (e)=>{

    //Ejercicio 10
    //Escribir un algoritmo que permita obtener las raíces reales de la ecuación de segundo grado: A * x2 +
    //b * x + c, siendo X un valor constante.


    let a,b,c,r1,r2

    a = Number(prompt("Ingrese un numero"))
    b = Number(prompt("Ingrese un numero"))
    c = Number(prompt("Ingrese un numero"))

    r1 = (-b + Math.sqrt(Math.pow(b,2)-4*a*c))/2*a
    r2 = (-b - Math.sqrt(Math.pow(b,2)-4*a*c))/2*a

    alert(`Raíces: (${r1},${r2})`)
})