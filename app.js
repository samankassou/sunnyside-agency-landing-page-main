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
        navLinks.forEach((el)=>{
            el.classList.remove('active')
        })
        link.classList.add('active')
        navMenu.classList.remove('menu-active')
    })
})
/*hide menu when user click away
window.addEventListener('click', (e)=>{
    if((e.target.classList.value !== "nav-links menu-active")){
        navMenu.classList.remove('menu-active')
        console.log(e.target.id)
    }
})*/