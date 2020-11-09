const activeRadio = document.querySelector(".current-radio");
const firstRadio = document.querySelector(".slider-radio-1");
const secondRadio = document.querySelector(".slider-radio-2");
const thirdRadio = document.querySelector(".slider-radio-3");
const activeSlide = document.querySelector(".current-slide")
const firstSlide = document.querySelector(".slider-item-1");
const secondSlide = document.querySelector(".slider-item-2");
const thirdSlide = document.querySelector(".slider-item-3");

firstRadio.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstRadio.classList.add("current-radio");
  firstSlide.classList.add("current-slide");
  secondRadio.classList.remove("current-radio");
  thirdRadio.classList.remove("current-radio");
  secondSlide.classList.remove("bg-img-second");
  thirdSlide.classList.remove("bg-img-third");
});

secondRadio.addEventListener("click", function (evt) {
  evt.preventDefault();
  secondRadio.classList.add("current-radio");
  secondSlide.classList.add("bg-img-second");
  firstRadio.classList.remove("current-radio");
  thirdRadio.classList.remove("current-radio");
  firstSlide.classList.remove("current-slide");
  thirdSlide.classList.remove("bg-img-third");
});

thirdRadio.addEventListener("click", function (evt) {
  evt.preventDefault();
  thirdRadio.classList.add("current-radio");
  thirdSlide.classList.add("bg-img-third");
  firstRadio.classList.remove("current-radio");
  secondRadio.classList.remove("current-radio");
  firstSlide.classList.remove("current-slide");
  secondSlide.classList.remove("bg-img-second");
});



