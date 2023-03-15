/**
 * Codigo que condiciona el color de las barras de progreso
 */

// La variable 'barras' es un objeto con todos los elemtos que tienen la clase 'barra-progreso'
const barras = document.querySelectorAll('.barra-progreso')

// Itera por cada elemnto en el objeto
barras.forEach((barra) => {
    // Obtiene el valor de la barra ("su porcentaje")
    let valor = barra.value

    // Evalua el valor y coloca la clase correspondiente
    if(valor <= 100 && valor > 66) { // Numeros desde 67 hasta el 100
        barra.classList.add('bg-green') // Agrega clase "bg-green"
    } else if(valor <= 66 && valor > 33) { // Numeros desde 34 hasta el 66
        barra.classList.add('bg-yellow') // Agrega clase "bg-yellow"
    } else if(valor <= 33) { // Numeros menores o iguales a 33
        barra.classList.add('bg-red')// Agrega clase "bg-red"
    }
})