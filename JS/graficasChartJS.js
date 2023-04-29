const barras = document.getElementById('grafica-barras')

const grafBarras = new Chart(barras, {
    data: {
        datasets: [
            {
                type: 'bar',
                label: '',
                data: [10, 30, 99, 30, 10, 10, 30, 99, 30, 10, 10, 30, 99, 30, 10, 10, 30, 99, 30, 10],
                backgroundColor: '#103099',
                color: 'rgb(0, 255, 0)'
            },
            {
                type: 'bar',
                label: '',
                data: [8, 20, 60, 20, 8, 8, 20, 60, 20, 8, 8, 20, 60, 20, 8, 8, 20, 60, 20, 8],
                backgroundColor: '#991030',
                color: 'rgb(0, 255, 0)'
            }
        ],
        labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
    }
})

//? Estructura en fragmentos de una grafica
const data = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
        {
            label: 'Flako',
            data: [10, 20, 15, 30, 25, 40, 35],
            borderColor: '#109930',
            borderWidth: 2,
            fill: false,
            tension: .4
        }
    ]
}

const options = {
    responsive: true,
    maintainAspectRatio: false
}

const config = {
    type: 'line',
    data: data,
    options: options
}

const linea = document.getElementById('grafica-linea').getContext('2d')

const grafLine = new Chart(linea, config)

//? Grafica de dona
const data2 = {
    // labels: ['hola', 'flkao', 'adiios'],
    datasets: [
        {
            label: 'Dona',
            data: [10, 30, 99],
            backgroundColor: ['#991030', '#109930', '#103099'],
            hoverOffset: 4,
        }
    ]   
}

const config2 = {
    type: 'doughnut',
    data: data2
}

const dona = document.getElementById('grafica-dona')

const grafDona = new Chart(dona, config2)