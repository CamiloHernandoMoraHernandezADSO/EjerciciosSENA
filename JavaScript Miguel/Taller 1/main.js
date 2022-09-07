addEventListener("DOMContentLoader", (e)=>{

    //Ejercicio 7
    //Escribir un programa que calcule el volumen de una esfera:
    //Radio = 3 volumen de la esfera = 4/3 * PI * radio˄3

    let volumen, radio

    radio = Number(prompt("Ingrese el radio de la esfera"))
    volumen = 4/3 * Math.PI * Math.pow(radio,3)

    alert(volumen)
})