const list = [30, 99, 10, 2, 666, 56, 72, 80, 16, 18, 23, 40]

console.log('ORIGINAL')
console.log(list)

for (let i = 0; i < list.length-1; i++) {
  list.forEach((num, index, array) => {
    if (num > array[index+1]) {
      array[index] = array[index+1]
      array[index+1] = num
    }
  })
}

console.log('ORDENADA')
console.log(list)
