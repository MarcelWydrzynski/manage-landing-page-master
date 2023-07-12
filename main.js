const hamburgerIcon = document.querySelector('.nav-hamburger-icon')
const hamburgerMenu= document.querySelector('.hamburger-menu')


hamburgerIcon.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active')
})



