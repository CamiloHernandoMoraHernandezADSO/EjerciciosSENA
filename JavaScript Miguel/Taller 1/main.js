addEventListener("DOMContentLoader", (e)=>{

/*
    Ejercicio 14
    Una farmacia aplica al precio de los remedios el 10% de descuento, hacer un programa que
    ingresando el costo de los medicamentos calcules el descuento y el precio final.
*/

    let costo, desc,pFinal

    costo = Number(prompt("Ingrese el valor del medicamento"))
    desc = costo * 0.10
    pFinal = costo - desc

    alert(`Precio: ${pFinal}`)


})