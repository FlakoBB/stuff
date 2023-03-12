/* Como lanzar un error */

function divide(a, b) {
    if(b === 0) {
        throw new Error("No se puede dividir entre 0")
    }

    return a / b
}

try {
    let resultado = divide(6, 0)
    console.log(resultado)
} catch (error) {
    console.log(error.message)
}