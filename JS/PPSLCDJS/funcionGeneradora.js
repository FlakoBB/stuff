/* Una Funcion Generadora nos permite suspender y despues reanudar en el punto en el que se quedo */

function* numeros() { // se definen con un '*' despues de 'function'
    let numero = 0
    while(numero < 100) {
        numero += 10
        yield numero // la funcion se detiene en 'yield' y devuelve el valor especificado
    }
}

const generador = numeros()

console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)