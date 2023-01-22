let menu_open = document.querySelector('.navbar .menu-toggle');
let links = document.querySelector('.navbar .nav');
menu_open.addEventListener('click',()=>{
    links.classList.toggle('active');
});