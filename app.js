// grab elements
const toggleBtn = document.getElementById('toggle-menu-btn')
const navMenu = document.querySelector('.nav-links')
const navLinks = document.querySelectorAll('.nav-links__item')
// add event listeners
toggleBtn.addEventListener('click', ()=>{
    navMenu.classList.toggle('menu-active')
})
navLinks.forEach((link) =>{
    link.addEventListener('click', ()=>{
        navMenu.classList.remove('menu-active')
    })
})