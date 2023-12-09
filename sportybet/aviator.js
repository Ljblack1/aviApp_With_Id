const moves = ["2.33", "5.67", "1.20", "13.55"];


const loadingBar = document.querySelector('.loading-bar');
const loadingFill = document.querySelector('.loading-bar-fill');
const btn = document.querySelector('.nxt-btn');
const move = document.querySelector('.value');
const pending = document.querySelector('.pending');
const loader = document.querySelector('.small-load');
const time = document.querySelector('.time');

const loginContainer = document.querySelector('.login-container');

// preloader before site open
const starBtns3 = document.querySelectorAll('#preloader3 .stars .star-btn');
const starBtns4 = document.querySelectorAll('#preloader3 .stars2 .star-btn');

function changeColor3(target) {
  if (target < 1) {
    starBtns3[0].style.color = "red";
  } else if (target < 2) {
    starBtns3[0].style.color = "red";
    starBtns3[1].style.color = "red";
  } else if (target < 3) {
    starBtns3[0].style.color = "red";
    starBtns3[1].style.color = "red";
    starBtns3[2].style.color = "red";
  } else if (target < 4) {
    starBtns3[0].style.color = "red";
    starBtns3[1].style.color = "red";
    starBtns3[2].style.color = "red";
    starBtns3[3].style.color = "red";
  } else {
    starBtns3[0].style.color = "red";
    starBtns3[1].style.color = "red";
    starBtns3[2].style.color = "red";
    starBtns3[3].style.color = "red";
    starBtns3[4].style.color = "red";
  }
}
function changeColor4(target) {
  if (target < 1) {
    starBtns4[0].style.color = "red";
  } else if (target < 2) {
    starBtns4[0].style.color = "red";
    starBtns4[1].style.color = "red";
  } else if (target < 3) {
    starBtns4[0].style.color = "red";
    starBtns4[1].style.color = "red";
    starBtns4[2].style.color = "red";
  } else if (target < 4) {
    starBtns4[0].style.color = "red";
    starBtns4[1].style.color = "red";
    starBtns4[2].style.color = "red";
    starBtns4[3].style.color = "red";
  } else {
    starBtns4[0].style.color = "red";
    starBtns4[1].style.color = "red";
    starBtns4[2].style.color = "red";
    starBtns4[3].style.color = "red";
    starBtns4[4].style.color = "red";
  }
}

starBtns3.forEach((starBtn3) => {
  starBtn3.addEventListener('click', (e) => {
    const target = e.currentTarget.dataset.id;
    changeColor3(target);
  })
  setTimeout(() => {
    preloader3.style.display = "none";
    loginContainer.style.display = "flex";
  }, 5000)
})

starBtns4.forEach((starBtn4) => {
  starBtn4.addEventListener('click', (e) => {
    const target = e.currentTarget.dataset.id;
    changeColor4(target);
  })
})

// working on the login
const input = document.getElementById('id');
const form = document.querySelector('.login');
// const sBtn = document.querySelector('.submit-btn');

const alert = document.querySelector('.alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = input.value;
  loader.style.display = "flex";

  if (id && id === '#pro530#') {
    // displayAlert('succeded please wait', 'success');
    setTimeout(() => {
      loginContainer.style.transform = `translateX(${-100}%)`;
      loginContainer.style.transition = `all ${1}s ease`;
      // loginContainer.style.display = "none";
      loader.style.display = "none";
      loader.style.transition = `all ${1}s ease`;
    }, 5000)
  } else {
    setTimeout(() => {
      loader.style.display = "none";
      displayAlert('invalid id', 'danger');
    }, 3000)
  }
  input.value = '';
})

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(action);
  alert.style.transition = `all ${1}s ease`;

  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(action);
    alert.style.transition = `all ${1}s ease`;
  }, 2000)
}

// working on the login ends here

// preloader

// const preloder1 = document.querySelector('.preloader');

// window.addEventListener('DOMContentLoaded', () => {
//   preloder1.style.display = "flex";
// })

// window.addEventListener('load', () => {
//   setTimeout(() => {
//     preloder1.style.display = "none";
//   }, 5000)
// })


function getTime() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();

  minutes < 10 ? minutes = `0${minutes}` : minutes = minutes;

  if (hours > 12) {
    hours = hours - 12;
    return `${hours}:${minutes} PM`;
  } else {
    return `${hours}:${minutes} AM`;
  }

}

window.addEventListener("DOMContentLoaded", () => {
  time.textContent = getTime();
  
  setInterval(() => {
    time.textContent = getTime();
  }, 1000)
})

let value = 0;

btn.addEventListener("click", () => {
  
  loader.style.display = "flex";

  value++;

  if (value > moves.length -1) {
    value = 0;
  }
  setTimeout(() => {
    // loadingFill.style.transform = `translateX(${100}%)`;
    // btn.textContent = "Next";
    // loader.style.display = "none";
    // move.textContent = `${moves[value]}x`;

    loader.innerHTML = `
      <p id="error">Error</p>
      <p>Please try connicting to VPN</p>
    `;

    // loader.style.display = "flex";
  }, 20000);

  loadingFill.style.transform = `translateX(${-100}%)`;
})