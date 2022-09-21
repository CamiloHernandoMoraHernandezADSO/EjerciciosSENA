addEventListener("DOMContentLoader", (e)=>{

/*
    Ejercicio 24

    Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada uno por 
    $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000. Después de pagar le 
    sobran $91000. ¿cuánto dinero tenía?
*/
    let llaves,bombas,pernos,cambio,total

    llaves = 11500 * 3
    bombas = 116800
    pernos = 87000
    cambio = 91000

    total = llaves + bombas + pernos + cambio

    alert(`Total de dinero: ${total}`)
    


})