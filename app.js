const menu = document.getElementById('menu-bar')
const mobile = document.getElementById('mobile-menu')

const mobile_close = document.getElementById('menu-close-bar')

menu.addEventListener('click', function (){
    mobile.style.display = 'block'
})

mobile_close.addEventListener('click', function (){
    mobile.style.display = 'none'
})