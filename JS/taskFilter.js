const taskList = [
    {
        title: 'Tarea 1',
        type: 'Normal',
        isCompleted: false
    },
    {
        title: 'Tarea 2',
        type: 'Urgent',
        isCompleted: true
    },
    {
        title: 'Tarea 3',
        type: 'Urgent',
        isCompleted: true
    },
    {
        title: 'Tarea 4',
        type: 'Bloking',
        isCompleted: false
    },
    {
        title: 'Tarea 5',
        type: 'Bloking',
        isCompleted: true
    },
    {
        title: 'Tarea 6',
        type: 'Normal',
        isCompleted: false
    },
]

//? Vaciar Lista
const cleanList = () => {
    while(list.firstChild) {
        list.removeChild(list.firstChild)
    }
}

const list = document.getElementById('list')

taskList.forEach(element => {
    let li = document.createElement('li')
    li.innerText = `${element.title} ${element.type} ${element.isCompleted}`

    list.appendChild(li)
})


//* Filtro: Mostrar Todas
const btnAll = document.getElementById('all')

btnAll.addEventListener('click', () => {
    cleanList()
    taskList.forEach(element => {
        let li = document.createElement('li')
        li.innerText = `${element.title} ${element.type} ${element.isCompleted}`
        
        list.appendChild(li)
    })
})

//* Filtro: Mostrar Completadas
const btnCompleted = document.getElementById('completed')

btnCompleted.addEventListener('click', () => {
    cleanList()
    taskList.forEach(element => {
        if(element.isCompleted === true) {
            let li = document.createElement('li')
            li.innerText = `${element.title} ${element.type} ${element.isCompleted}`
            
            list.appendChild(li)
        }
    })
})

//* Filtro: Mostrar Urgentes
const btnUrgent = document.getElementById('urgent')

btnUrgent.addEventListener('click', () => {
    cleanList()
    taskList.forEach(element => {
        if(element.type === 'Urgent') {
            let li = document.createElement('li')
            li.innerText = `${element.title} ${element.type} ${element.isCompleted}`
            
            list.appendChild(li)
        }
    })
})

//* Filtro: Mostrar Normal
const btnNormal = document.getElementById('normal')

btnNormal.addEventListener('click', () => {
    cleanList()
    taskList.forEach(element => {
        if(element.type === 'Normal') {
            let li = document.createElement('li')
            li.innerText = `${element.title} ${element.type} ${element.isCompleted}`
            
            list.appendChild(li)
        }
    })
})

//* Filtro: Mostrar Blokings
const btnBloking = document.getElementById('bloking')

btnBloking.addEventListener('click', () => {
    cleanList()
    taskList.forEach(element => {
        if(element.type === 'Bloking') {
            let li = document.createElement('li')
            li.innerText = `${element.title} ${element.type} ${element.isCompleted}`
            
            list.appendChild(li)
        }
    })
})