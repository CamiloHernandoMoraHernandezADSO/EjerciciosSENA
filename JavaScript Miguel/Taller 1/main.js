addEventListener("DOMContentLoader", (e)=>{

/*
    Ejercicio 17
Dado el valor que un cliente paga por un producto, calcular qué valor corresponde al costo total del
producto y cuánto es el valor del IVA. Considerando que el porcentaje del IVA puede variar en el
tiempo y de un producto a otro, este dato se lee por teclado.

*/

    let costo, iva,r

    costo = Number(prompt("Ingrese el valor del producto"))
    iva = Number(prompt("Ingrese el IVA"))

    r = costo + iva/100
    
    alert(`Valor final: ${r}`)


})