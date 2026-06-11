const slider = document.querySelectorAll(".slider");
const prev = document.getElementById("prev-button");
const next = document.getElementById("next-button");

let currentSlide = 0;

function hideSlider() {
  slider.forEach((item) => item.classList.remove("on"));
}

function showSlider() {
  slider[currentSlide].classList.add("on");
}

function nextSlider() {
  hideSlider();
  if (currentSlide === slider.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlider();
}

function prevtSlider() {
  hideSlider();
  if (currentSlide === 0) {
    currentSlide = slider.length - 1;
  } else {
    currentSlide--;
  }
  showSlider();
}

next.addEventListener("click", nextSlider);
prev.addEventListener("click", prevtSlider);

const menuHam = document.getElementById("menu_ham");
const listMenuMobile = document.getElementById("menu_mobile");

function activeMenu() {
  listMenuMobile.classList.toggle("active");
}

function imgTroca() {
  if (listMenuMobile.classList.contains("active")) {
    menuHam.src = "./imgs/close-menu-ham.svg";
  } else {
    menuHam.src = "./imgs/menu-mobile.svg";
  }
}

menuHam.addEventListener("click", activeMenu);
menuHam.addEventListener("click", imgTroca);
