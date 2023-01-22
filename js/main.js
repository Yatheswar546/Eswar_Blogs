// Navbar
let menu_open = document.querySelector('.navbar .menu-toggle');
let links = document.querySelector('.navbar .nav');
menu_open.addEventListener('click',()=>{
    if(links.style.display=='block'){
        links.style.display='none';
    }
    else{
        links.style.display='block';
    }
});


// Carousel
$('.post-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });