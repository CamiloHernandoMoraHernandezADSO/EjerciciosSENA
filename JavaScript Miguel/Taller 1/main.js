addEventListener("DOMContentLoader", (e)=>{

/*
    Ejercicio 21
    Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la solución, 
    por favor utilizar funciones matemáticas de Python para ello
    d = rc((x2-x1)^2 + (y2-y1)^2)
*/

   let d,x1,x2,y1,y2

    x1 = Number(prompt("Ingrese x1"))
    x2 = Number(prompt("Ingrese x2"))
    y1 = Number(prompt("Ingrese y1"))
    y2 = Number(prompt("Ingrese y2"))

    d = Math.sqrt((x2-x1)**2 + (y2-y1)**2)

    alert(`La distancia entre los puntos es: ${d}`)

})