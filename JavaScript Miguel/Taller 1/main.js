addEventListener("DOMContentLoader", (e)=>{

/*
    Ejercicio 28
    Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura. Considere que 
    se cobra por m2 y realice el código que representen el algoritmo que le permita ir generando 
    presupuestos para cada cliente.
*/

    let m2, costo, total

    m2 = Number(prompt("Ingrese la cantidad de m²"))
    costo = Number(prompt("Ingrese el costo el trabajo"))
    total = m2 * costo

    alert(`El costo del trabajo es:  ${total}`)

})