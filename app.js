// grab elements
const toggleBtn = document.getElementById('toggle-menu-btn')
const navMenu = document.querySelector('.nav-links')

// add event listeners
toggleBtn.addEventListener('click', ()=>{
    navMenu.classList.toggle('menu-active')
})