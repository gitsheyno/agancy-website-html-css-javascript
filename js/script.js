const toggle = document.querySelector('.toggle')
const nav = document.querySelector('.navigation')

toggle.addEventListener('click', (e) => {
    toggle.classList.toggle('active')
    nav.classList.toggle('active')
})