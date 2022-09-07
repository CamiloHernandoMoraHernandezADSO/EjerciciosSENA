addEventListener("DOMContentLoader", (e)=>{

/*
    Ejercicio 12
    Programa que muestre el pago de una llamada telefónica sabiendo que cada minuto cuesta $355
    pesos y un IVA de 20%.
*/

    let min,iva, valor

    min = Number(prompt("Ingrese la cantidad de minutos"))
    iva = 0.20
    valor = min * 355
    valor *= iva

    alert(`Costo: ${valor}`)
})