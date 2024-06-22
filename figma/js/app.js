let menu = document.querySelector('#menu')
let sidebar = document.querySelector('.sidebar')
let close = document.querySelector('#close')

menu.addEventListener('click', () => {
    sidebar.classList.toggle('active')
})

close.addEventListener('click', () => {
    sidebar.classList.remove('active')
})