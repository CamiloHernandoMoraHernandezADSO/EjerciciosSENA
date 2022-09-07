addEventListener("DOMContentLoader", (e)=>{

    //Ejercicio 9
    //Escribir un programa que calcule el área y el volumen de un cilindro:
    //V = (PI * r2) * h
    //A = (2 * (PI * r˄2)) + ((2 * PI * r) * h)


    let v,a,h,r

    r = Number(prompt("Ingrese el radio"))
    h = Number(prompt("Ingrese la altura"))

    v = Math.PI * Math.pow(r,2 * h)
    a = (2 * (Math.PI * Math.pow(r,2)) + ((2 * Math.PI * r) * h))
    

    alert(`Volumen: ${v}`)
    alert(`Area: ${a}`)
})