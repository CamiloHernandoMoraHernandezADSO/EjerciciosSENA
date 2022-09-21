addEventListener("DOMContentLoader", (e)=>{

/*
    Ejercicio 22
    Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un 2% de 
    descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada producto y el total 
    de la compra.

*/

    let p1,p2,p3,p4,p5,total

    p1 = Number(prompt("Ingrese el valor del producto"))
    p2 = Number(prompt("Ingrese el valor del producto"))
    p3 = Number(prompt("Ingrese el valor del producto"))
    p4 = Number(prompt("Ingrese el valor del producto"))
    p5 = Number(prompt("Ingrese el valor del producto"))

    let desc1 = p1 - p1 * 0.05
    let desc2 = p2 - p2 * 0.05
    let desc4 = p4 - p4 * 0.02
    let desc5 = p5 - p5 * 0.02

    total = desc1 + desc2 + desc4 + desc5 + p3

    alert(`El total a pagar es: ${total}`)
})