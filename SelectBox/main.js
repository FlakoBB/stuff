const selectedOption = document.querySelector('.selectedOption')
const options = document.querySelectorAll('.optionsList__item')

selectedOption.value = options[0].innerHTML

options.forEach(option => {
  option.addEventListener('click', () => selectedOption.value = option.innerHTML)
})