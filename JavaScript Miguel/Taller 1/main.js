addEventListener("DOMContentLoader", (e)=>{

    //Ejercicio 6
    //Escribir un programa que calcule la velocidad de un proyectil que recorre 2 Km en 5 minutos. Expresar
    //el resultado en metros/segundo. Velocidad = distancia/tiempo.

    let vel, dist=2, tiempo=5,met,segu

    met = dist * 1000
    segu = tiempo * 60
    vel = met / segu
    alert(`Velocidad: ${vel}`)


})