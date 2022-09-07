addEventListener("DOMContentLoader", (e)=>{

/*
    Ejercicio 20
    Un vendedor recibe un sueldo base más el 10% de comisión sobre sus ventas. Si en un mes
cualquiera hace tres ventas por valores: v1, v2 y v3, ¿cuánto recibirá por comisión? y ¿cuánto en total
sueldo del vendedor?.
*/

   let sldBase,v1,v2,v3, comision,sldTotal

    sldBase = Number(prompt("Ingrese su sueldo"))
    v1 = Number(prompt("Ingrese el valor de su venta"))
    v2 = Number(prompt("Ingrese el valor de su venta"))
    v3 = Number(prompt("Ingrese el valor de su venta"))

    comision = (v1 + v2 + v3)*0.10
    sldTotal = sldBase + comision

    alert(`Su sueldo es de: ${sldTotal}`)


})