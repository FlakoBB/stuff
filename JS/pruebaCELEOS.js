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
