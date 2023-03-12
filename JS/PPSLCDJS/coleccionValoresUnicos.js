/* SET es una coleccion que nos permite guardar valores unicos */

const coleccion = new Set()

coleccion.add(30)
coleccion.add(10)
coleccion.add(60)
coleccion.add(30)
coleccion.add(10)

console.log(coleccion) // {30, 10, 60}