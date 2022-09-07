addEventListener("DOMContentLoader", (e)=>{

/*
    Ejercicio 18
    Calcular el sueldo de un empleado dados comodatos de entrada: el nombre, hrs. De trabajo y el pago
en hora. Pagohora=15300
*/

    let nombre, horas, pagoHora, sueldo

    nombre = prompt("Ingres su nombre")
    horas = Number(prompt("Ingrese el numero de horas trabajadas"))
    pagoHora = Number(prompt("Ingrese el valor de la hora"))
    sueldo = horas * pagoHora
    alert(`${nombre} gana ${sueldo}`)




})