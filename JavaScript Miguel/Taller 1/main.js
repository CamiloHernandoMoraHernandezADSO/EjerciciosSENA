addEventListener("DOMContentLoader", (e)=>{

/*
    Ejercicio 27
    Tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año. Martin toma 
    2/3 del total. Jairo un cuarto del total, y Lorena se queda con el resto. ¿qué parte le corresponde a 
    Lorena?


*/

    let total, martin, jairo, lorena

    total = 1
    martin = 2/3
    jairo = 1/4
    lorena = 1-martin - jairo
    
    alert(`A Lorena le tocó ${lorena}`)

})