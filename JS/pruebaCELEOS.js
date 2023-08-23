// * What does this code print to the console?
let bear = {
  sound: 'roar',
  roar(){
    console.log(this.sound)
  }
}

bear.sound = 'grunt'
let bearSound = bear.roar // ? el metodo roar() no se puede ejecutar fuera del contexto del objeto bear

bearSound() // ? undefined

// * What is the output of this code?
class RainForest {
  static minimumRainFall = 60
}

let congo = new RainForest()
RainForest.minimumRainFall = 80 // ! Correcto: congo.minimumRainFall = 80
console.log(congo.minimumRainFall) // ? undefine

// * What will be logged to the console?
var a = ['dog', 'cat', 'hen']
a[100] = 'fox'
console.log(a.length)

// * What is the output of this code?
let rainForests = ['Amazon', 'Borneo', 'Cerrado', 'Congo']
rainForests.splice(0, 2) // ? El metodo splice() sirve para modificar un arreglo: eliminar, cambiar o agregar elementos en una posicion especifica
console.log(rainForests) // ? ['Cerrado', 'Congo']

// * What statement can be used to skip an iteration in a loop
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // ? Salta la iteración cuando i es igual a 2
  }
  console.log(i);
}

// * Print each vowel on a separate line
let vowels = 'aeiou'

for (let i = 0; i < vowels.length; i++) {
  console.log(vowels[i])
}

// * What is the output of this code?
console.log('I')
setTimeout(() => {
  console.log('love') // ? aunque el tiempo a esperar de una funcion setTimeout sea 0, la funcion callback se ejecuta despues del código sincrono
}, 0)
console.log('JavaScript')
// ? I
// ? JavaScript
// ? love

// * Which snippet could you add to this code to print '{"type":"tiger"}'
let cat = { type: 'tiger', size: 'large' }

let json = JSON.stringify(cat, ['type']) // ? convierte el objeto 'cat' a un formato JSON, pero solo la propiedad 'type'

console.log(json)

// * What will be logged to the console?
const x = 6 % 2 // ? x = 0 (la operacion 6 % 2 calcula el reciduo de la división de 6 entre 2)
const y = x ? 'One' : 'Two' // ? 0 en terminos booleanos es false
console.log(y) // ? 'Two'

// * What is the value of 'dessert.type' after executing this code?
const dessert = { type: 'pie' }
dessert.type = 'pudding'

const seconds = dessert
seconds.type = 'fruit'

console.log(dessert.type) // ? fruit
// ? Ambas variables están apuntando al mismo objeto, por lo que cualquier cambio en ese objeto se reflejará en ambas variables.

// * Which line could you add to this code to print 'jaguar' to de console?
let animals = ['jaguar', 'eagle']

animals.reverse()

console.log(animals.pop())