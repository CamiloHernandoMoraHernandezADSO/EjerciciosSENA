addEventListener("DOMContentLoaded", (e)=>{

/*
    Ejercicio 30

    Ingrese una frase que lo identifique como programador de Software y luego mostar esta frase 
    invertida.


*/

    let frase, invertida 

    frase = "Programador sin panza, no es de confianza"

    invertida = frase.split("").reverse().join("");

    alert(invertida)
})