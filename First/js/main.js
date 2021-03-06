$(function(){
    $('.slider').slick({
        speed:300,
        dots:true,
        waitForAnimate:false,
        infinite:true,
        autoplay:false,
        draggable:false,
    });
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})




const menuToggle = document.querySelector('#menu-togle');
const hamburger = document.querySelector('#hamburger');
const hamburgerMobile = document.querySelector('#mobilehamburger')
const menuToggleMobile = document.querySelector('#mobilemenu-togle')
menuToggle.addEventListener('click',function(){
    if(menuToggle){
        menuToggle.display = "none"
        menuToggle.classList.toggle('menu-icon-active');
        hamburger.classList.toggle('hamburger--active')
        menuToggleMobile.display = "none"
        menuToggleMobile.classList.toggle('menu-icon-active');
        hamburgerMobile.classList.toggle('mobilehamburger--active')
    }else{
        menuToggle.display = "block"
        menuToggle.classList.toggle('menu-icon-active');
        hamburger.classList.toggle('hamburger--active');
        menuToggleMobile.display = "block"
        menuToggleMobile.classList.toggle('menu-icon-active');
        hamburgerMobile.classList.toggle('mobilehamburger--active')
    };//Метод toggle объекта classList чередует заданный CSS класс элемента: добавляет класс, если его нет и удаляет, если есть. 
})
menuToggleMobile.addEventListener('click',function(){
    if(menuToggleMobile){
        menuToggleMobile.display = "none"
        menuToggleMobile.classList.toggle('menu-icon-active');
        hamburgerMobile.classList.toggle('hamburger--active')
    }else{
        menuToggleMobile.display = "block"
        menuToggleMobile.classList.toggle('menu-icon-active');
        hamburgerMobile.classList.toggle('hamburger--active')
    };//Метод toggle объекта classList чередует заданный CSS класс элемента: добавляет класс, если его нет и удаляет, если есть. 
})
