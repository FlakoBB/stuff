const matrizA = [
  ['1-1', '1-2', '1-3'],
  ['2-1', '2-2', '2-3'],
  ['3-1', '3-2', '3-3']
]

console.log('MATRIZ A')
console.log(matrizA)
console.log('')

const matrizB = [
  [],
  [],
  []
]

for (let i = 0; i < matrizA.length; i++) {
  for (let j = 0; j < matrizA[i].length; j++) {
    const valor = matrizA[i][j]
    matrizB[j][i] = valor
  }
}

console.log('MATRIZ B')
console.log(matrizB)