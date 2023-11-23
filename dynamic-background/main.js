const container = document.querySelector('.background_container')

if (container) {
  for (let i = 0; i < 150; i++) {
    const box = document.createElement('div')
    box.classList.add('background_section')
    box.style.setProperty('--i', i + 1)
    container.appendChild(box)
  }
} else {
  console.error('No existe el contenedor')
}