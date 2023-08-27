const city = document.getElementById('cityDD')
const guests = document.getElementById('guestsDD')
const drop = document.querySelector('.drop')
const citySection = document.getElementById('citySection')
const guestsSection = document.getElementById('guestsSection')
const btnSearch = document.getElementById('btnSearch')

city.addEventListener('click', () => {
  if (!city.classList.contains('open') && !guests.classList.contains('open')) {
    city.classList.add('open')
    drop.style.display = 'block'
    citySection.style.display = 'flex'
    btnSearch.classList.add('btn--active')
  } else if (guests.classList.contains('open') && !city.classList.contains('open')) {
    guests.classList.remove('open')
    guestsSection.style.display = 'none'
    city.classList.add('open')
    citySection.style.display = 'flex'
    btnSearch.classList.add('btn--active')
  } else {
    city.classList.remove('open')
    drop.style.display = 'none'
    citySection.style.display = 'none'
    btnSearch.classList.remove('btn--active')
  }
})

guests.addEventListener('click', () => {
  if (!guests.classList.contains('open') && !city.classList.contains('open')) {
    guests.classList.add('open')
    drop.style.display = 'block'
    guestsSection.style.display = 'flex'
    btnSearch.classList.add('btn--active')
  } else if (city.classList.contains('open') && !guests.classList.contains('open')) {
    city.classList.remove('open')
    citySection.style.display = 'none'
    guests.classList.add('open')
    guestsSection.style.display = 'flex'
    btnSearch.classList.add('btn--active')
  } else {
    guests.classList.remove('open')
    drop.style.display = 'none'
    guestsSection.style.display = 'none'
    btnSearch.classList.remove('btn--active')
  }
})