// Seach Form Section

let searchForm = document.querySelector('.search-form')

document.getElementById("search-btn").onclick = function() {
    searchForm.classList.toggle('active')
    shoppingCart.classList.remove('active')
    accountForm.classList.remove('active')
    navbar.classList.remove('active')
}


// Shopping Cart Section

let shoppingCart = document.querySelector('.shopping-cart')
document.getElementById("cart-btn").onclick = function() {
    shoppingCart.classList.toggle('active')
    searchForm.classList.remove('active')
    accountForm.classList.remove('active')
    navbar.classList.remove('active')
}


// Account Form Section

let registerBtn = document.querySelector(".account-form .register-btn");
let loginBtn = document.querySelector(".account-form .login-btn");
let accountForm = document.querySelector('.account-form');

registerBtn.onclick = () => {
    document.querySelector('.account-form .login-form').classList.remove('active');
    document.querySelector('.account-form .register-form').classList.add('active');
}

loginBtn.onclick = () => {
    document.querySelector('.account-form .login-form').classList.add('active');
    document.querySelector('.account-form .register-form').classList.remove('active');
}

document.querySelector('#form-btn').onclick = () => {
    accountForm.classList.add('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    navbar.classList.remove('active')
}
document.querySelector('#close-form').onclick = () => {
    accountForm.classList.remove('active')
}

// navbar Section

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active')
    accountForm.classList.remove('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
}

window.onscroll = () => {
    navbar.classList.remove('active')
    accountForm.classList.remove('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
}

// home slide Section

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0

function next() {
    slides[index].classList.remove('active')
    index = (index + 1) % slides.length;
    slides[index].classList.add('active')
}

function prev() {
    slides[index].classList.remove('active')
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active')
}

// products swiper Section

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay: 5500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

// products swiper Section

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay: 5500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });