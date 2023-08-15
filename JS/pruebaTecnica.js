//  1- obtener una nueva lista con las frutas de color rojo.
//  2- obtener una nueva lista unicamente con los nombres de las frutas.
//  3- obtener una nueva lista unicamente con los precios de las frutas color amarillo.

const frutas = [
  {
    nombre: 'fresa',
    color: 'rojo',
    precio: 40
  },
  {
    nombre: 'uva',
    color: 'verde',
    precio: 50
  },
  {
    nombre: 'limon',
    color: 'verde',
    precio: 35
  },
  {
    nombre: 'platano',
    color: 'amarillo',
    precio: 25
  },
  {
    nombre: 'manzana',
    color: 'rojo',
    precio: 30
  },
  {
    nombre: 'pera',
    color: 'verde',
    precio: 40
  },
  {
    nombre: 'naranja',
    color: 'amarillo',
    precio: 30
  },
]

// ? Frutas Rojas
const frutasRojas = []

const obtenerFrutasRojas = () => {
  frutas.forEach(fruta => {
    if (fruta.color === 'rojo') {
      frutasRojas.push(fruta)
    }
  })
}

obtenerFrutasRojas()
console.log(frutasRojas)

// ? Nombres Frutas
const nombresFrutas = []

const obtenerNombresFrutas = () => {
  frutas.forEach(fruta => {
    console.log(fruta.nombre)
    nombresFrutas.push(fruta.nombre)
  })
}

obtenerNombresFrutas()
console.log(nombresFrutas)

// ? Precios Frutas Amarillas
const preciosFrutasAmarillas = []

const obtenerPreciosFrutasAmarillas = () => {
  frutas.forEach(fruta => {
    if (fruta.color === 'amarillo') {
      preciosFrutasAmarillas.push(fruta.precio)
    }
  })
}

obtenerPreciosFrutasAmarillas()
console.log(preciosFrutasAmarillas)