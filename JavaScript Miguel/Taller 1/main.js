addEventListener("DOMContentLoader", (e)=>{

    //Ejercicio 11
    //Escribir un programa que calcule el volumen de un elipsoide
    //V = (4/3) * PI * a * b *c
    
    let a,b,c,v

    a = Number(prompt("Ingrese un numero"))
    b = Number(prompt("Ingrese un numero"))
    c = Number(prompt("Ingrese un numero"))
    v = (4/3) * Math.PI * a * b *c

    alert(`Volumen del elipsoide: ${v}`)
})