const body = document.getElementById('body')
const header = document.getElementById('header')
const footer = document.getElementById('footer')
const darkMode = document.getElementById('switch')

darkMode.addEventListener('change', () => {
    body.classList.toggle('dark')
    header.classList.toggle('dark')
    footer.classList.toggle('dark')
})