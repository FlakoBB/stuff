/* 
    Un caracol sube 7 pies cada dia y retrocede 2 pies cada noche.
    ¿Cuantos dias le tomara al caracol salir de un pozo con la profundidad dada?

    Ejemplo de entrada: 31
    Ejemplo salida: 6

    Explicación:
    dia 1: 7 - 2 = 5
    dia 2: 5 + 7 - 2 = 10
    dia 3: 10 + 7 - 2 = 15
    dia 4: 15 + 7 - 2 = 20
    dia 5: 20 + 7 - 2 = 25
    dia 6: 25 + 7 = 32

    así que el dia 6 el caracol alcanzará los 32 pies y saldra del pozo durante el dia, sin volver a resvalar esa noche.

    prueba 1: E -> 42 | S -> 8
    prueba 2: E -> 128 | S -> 26
*/

function caracole(altura) {
    let dias = 1;
    for(let i = 7; i < altura; i += 7) {
        if(i <= altura) {
            i -= 2
        }
        dias++
    }
    return dias
}

const c = caracole(31)
console.log(`total: ${c}`)