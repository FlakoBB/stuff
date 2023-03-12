/* sin paramentros */
var Hola = () => {console.log("Hola mundo")}
Hola()

/* con un parametro */
var cuadrado = num => {return num * num}
console.log(cuadrado(5))

/* con varios parametros */
let suma = (num1, num2) => {return num1 + num2}
console.log(suma(6, 4))

/* con una sola expresion */
const mitad = numero => numero / 2
console.log(mitad(60))

/* retorna un objeto literal */
const crearPersona = (nombre, edad) => ({nombre, edad})
console.log(crearPersona("Flako", 23))