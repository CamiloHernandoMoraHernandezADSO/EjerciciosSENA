addEventListener("DOMContentLoader", (e)=>{

    //Ejercicio 8
    //Escribir un programa que evalúe la siguiente expresión:
    //(a+7*c)/(b+2-a)+2*b

    let a,b,c,r

    a = Number(prompt("ingrese un numero"))
    b = Number(prompt("ingrese un numero"))
    c = Number(prompt("ingrese un numero"))

    r = (a+7*c)/(b+2-a)+2*b

    alert(`Resultado ${r}`)


})