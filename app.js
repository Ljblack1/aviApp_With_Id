// preloader

const preloder1 = document.querySelector('.preloader');
const preloder2 = document.querySelector('.preloader2');
const splahScreen = document.querySelector('.splash_screen');
const options = document.querySelectorAll('.option-btn');

const loader = document.querySelector('.small-load');


window.addEventListener('DOMContentLoaded', () => {
  preloder1.style.display = "flex";
})

window.addEventListener('load', () => {
  setTimeout(() => {
    splahScreen.style.display = "none";
    setTimeout(() => {
      preloder1.style.display = "none";
  
      setTimeout(() => {
        preloder2.style.display = "none";
      }, 5000)
    }, 5000)
  }, 5000);
})

options.forEach((option) => {
  option.addEventListener('click', (e) => {
    const id = e.currentTarget.dataset.id;

    loader.style.display = "flex";

    setTimeout(() => {
      if (id && id === "aviator") {
        loader.style.display = "none";
        location.href = "sportybet/aviator.html";
      } else {
        alert("no id");
      }
    }, 4000)
    
  })
})