const objeto = {
    nombre: "Flako",
    apellido: "BB",
    edad: 23,
    estatura: 182,
    masa: 80
}

/* for... in */
console.log("FOR...IN")
for(let propiedad in objeto) {
    console.log(`${propiedad}: ${objeto[propiedad]}`)
}
console.log("------------------------------")

/* Object.keys() */
console.log("OBJECT.KEYS()")
let keys = Object.keys(objeto)
for(let i = 0; i < keys.length; i++) {
    console.log(`${keys[i]}: ${objeto[keys[i]]}`)
}
console.log("------------------------------")

/* Object.values() */
console.log("OBJECT.VALUES()")
let valores = Object.values(objeto)
for(let i = 0; i < valores.length; i++) {
    console.log(valores[i])
}
console.log("------------------------------")

/* Object.entries() */
console.log("OBJECT.ENTRIES()")
console.log("for")
let entries = Object.entries(objeto)
for(let i = 0; i < entries.length; i++) {
    console.log(`${entries[i][0]}: ${entries[i][1]}`)
}
console.log()
// sintaxis de desestructuracion
console.log("desestructuracion")
for(let [llave, valor] of Object.entries(objeto)) {
    console.log(`${llave}: ${valor}`)
}
console.log("------------------------------")