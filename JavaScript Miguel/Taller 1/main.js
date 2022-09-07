addEventListener("DOMContentLoader", (e)=>{

/*
    Ejercicio 15
    Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit.
*/

    let gradosC, gradosF

    gradosC = Number(prompt("Ingrese los grados en centigrados"))

    gradosF = (gradosC*(9/5))+32

    alert(`Gradis Fahrenheit: ${gradosF}`)

})