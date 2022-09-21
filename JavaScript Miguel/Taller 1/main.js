addEventListener("DOMContentLoader", (e)=>{

/*
    Ejercicio 23
    Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un 
    depósito.
    • Q=V/t, siendo Q (caudal), V (volumen) y t (tiempo). 
    • Volumen = PI *(radio^2)* H (altura del depósito)
    • El tiempo se encuentra en minutos.
    • Normalmente se mide el volumen en litros y el tiempo en segundos.
*/

    
    let q,v,t,r,h

    q = Number(prompt("Ingrese el valor del caudal"))
    r = Number(prompt("Ingrese el radio"))
    h = Number(prompt("Ingrese la altura"))

    v = Math.PI()*r**2*h
    t = v/q

    alert(`El tiempo estimado en que se llena el caudal es: ${t} `)



})