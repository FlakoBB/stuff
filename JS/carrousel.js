const carrousel = document.getElementById('carrousel')
const btnLeft = document.getElementById('btn_left')
const btnRight = document.getElementById('btn_right')
const scrollAmount = 672

btnLeft.addEventListener('click', () => {
    carrousel.scrollLeft -= scrollAmount
})

btnRight.addEventListener('click', () => {
    carrousel.scrollLeft += scrollAmount
})