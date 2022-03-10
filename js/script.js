$(document).ready(()=>{
  $('.reviews__slider').slick({
  centerMode: true,
  slidesToShow: 1,
  slidestoScroll:1,
  variableWidth: true,
  arrows:false,
  dots:true,
  
  })
  })
const btn = document.querySelector('.header__burger');
const list = document.querySelector('.header__list');
btn.addEventListener('click',()=>{
  list.classList.toggle('active');
  btn.classList.toggle('active');
})