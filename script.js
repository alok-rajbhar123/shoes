// let searchform = document.querySelector(".search-form");


// document.querySelector("#search-btn").onclick = () => {
//   searchform.classList.toggle("active");
//   navbar.classList.remove("active");
// };

// let navbar = document.querySelector(".navbar");

// document.querySelector("#menu-btn").onclick = () => {
//   navbar.classList.toggle("active");
//  searchform.classList.remove("active");
//   // cartItem.classList.remove("active");
// };

// let navbar = document.querySelector('.navbar');


// document.querySelector("#menu-btn").onclick = () =>{
//   navbar.classList.toggle('active');
//   searchform.classList.remove('active');
// }

window.onscroll = () =>{
    searchForm.classList.remove('active');
      navbar.classList.remove("active");
    if(window.scrollY > 30){
        document.querySelector('header').classList.add('header-active')
    }
    else{
        document.querySelector('header').classList.remove('header-active')
    }
}
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  // cartItem.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  // cartItem.classList.remove("active");
};

let slides = document.querySelectorAll(".home .slides-container .slide");
let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}




var swiper = new Swiper(".featured-slider",{
  loop:true,
  centeredslides:true,
  spaceBetween:20,
  autoplay:{
    delay:9500,
    disableOnInteraction:false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    450:{
      slidesPerView: 2,
    },
    768:{
      slidesPerView: 3,
    },
    1200:{
      slidesPerView: 4,
    },
  },


});




// let slides = document.querySelectorAll(".home .slides-container .slide");
// let index= 0

// function next(){
//   slides[index].classList.remove('active');
//   index = (index + 1) % slides.length;
//   slides[index].classList.add('active');
// }

// function prev(){
//   slides[index].classList.remove('active');
//   index = (index - 1 + slides.length) % slides.length;
//   slides[index].classList.add('active');
// }


// let cartItem = document.querySelector(".cart-items-container");

// document.querySelector("#cart-btn").onclick = () => {
//   cartItem.classList.toggle("active");
//   navbar.classList.remove("active");
//   searchForm.classList.remove("active");
// };

// window.onscroll = () => {
//   navbar.classList.remove("active");
//   searchForm.classList.remove("active");
//   cartItem.classList.remove("active");
// };