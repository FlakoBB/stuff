/*
    Como aumentar tiempo a la fecha y hora actual
*/

const horaActual = new Date().getHours()

console.log(`Hora actual: ${horaActual}`)

const nuevaHora = horaActual + 2

console.log(nuevaHora)


// aumentando 5 minutos a la fecha actual
const fechaActual = new Date()

const nuevaFecha = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate(), fechaActual.getHours(), fechaActual.getMinutes()+5, fechaActual
.getSeconds())

console.log(`Actual: ${fechaActual}`)
console.log(`Vencimiento: ${nuevaFecha}`)