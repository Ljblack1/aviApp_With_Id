// preloader

// const preloder1 = document.querySelector('.preloader');
// const preloder2 = document.querySelector('.preloader2');
const options = document.querySelectorAll('.option-btn');
const preloader2 = document.getElementById('preloader2');
const preloader3 = document.getElementById('preloader3');
const starBtns = document.querySelectorAll('#preloader2 .stars .star-btn');
const starBtns2 = document.querySelectorAll('#preloader2 .stars2 .star-btn');

const starBtns3 = document.querySelectorAll('#preloader3 .stars .star-btn');
const starBtns4 = document.querySelectorAll('#preloader3 .stars2 .star-btn');

// script for small load
const loader = document.querySelector('.small-load');


console.log(starBtns3);

starBtns.forEach((starBtn) => {
  starBtn.addEventListener('click', (e) => {
    const target = e.currentTarget.dataset.id;
    changeColor(target);
    
  })
})

setTimeout(() => {
  showPreloader();
}, 10000)

starBtns2.forEach((starBtn2) => {
  starBtn2.addEventListener('click', (e) => {
    const target = e.currentTarget.dataset.id;
    changeColor2(target);
  })
})

function changeColor(target) {
  if (target < 1) {
    starBtns[0].style.color = "red";
  } else if (target < 2) {
    starBtns[0].style.color = "red";
    starBtns[1].style.color = "red";
  } else if (target < 3) {
    starBtns[0].style.color = "red";
    starBtns[1].style.color = "red";
    starBtns[2].style.color = "red";
  } else if (target < 4) {
    starBtns[0].style.color = "red";
    starBtns[1].style.color = "red";
    starBtns[2].style.color = "red";
    starBtns[3].style.color = "red";
  } else {
    starBtns[0].style.color = "red";
    starBtns[1].style.color = "red";
    starBtns[2].style.color = "red";
    starBtns[3].style.color = "red";
    starBtns[4].style.color = "red";
  }
}
function changeColor2(target) {
  if (target < 1) {
    starBtns2[0].style.color = "red";
  } else if (target < 2) {
    starBtns2[0].style.color = "red";
    starBtns2[1].style.color = "red";
  } else if (target < 3) {
    starBtns2[0].style.color = "red";
    starBtns2[1].style.color = "red";
    starBtns2[2].style.color = "red";
  } else if (target < 4) {
    starBtns2[0].style.color = "red";
    starBtns2[1].style.color = "red";
    starBtns2[2].style.color = "red";
    starBtns2[3].style.color = "red";
  } else {
    starBtns2[0].style.color = "red";
    starBtns2[1].style.color = "red";
    starBtns2[2].style.color = "red";
    starBtns2[3].style.color = "red";
    starBtns2[4].style.color = "red";
  }
}

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

preloader3.style.display = "none";

// video preloader
const video = document.querySelector('.intro');

setTimeout(() => {
  video.style.display = "none";
}, 10000)

function showPreloader() {
  setTimeout(() => {
    preloader2.style.display = "none";
    preloader3.style.display = "flex";
    
    starBtns3.forEach((starBtn3) => {
      starBtn3.addEventListener('click', (e) => {
        const target = e.currentTarget.dataset.id;
        changeColor3(target);
      })
    })

    setTimeout(() => {
      preloader3.style.display = "none";
    }, 5000)

    starBtns4.forEach((starBtn4) => {
      starBtn4.addEventListener('click', (e) => {
        const target = e.currentTarget.dataset.id;
        changeColor4(target);
      })
    })
  }, 5000)
}

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
// window.addEventListener('DOMContentLoaded', () => {
//   preloder1.style.display = "flex";
// })

// window.addEventListener('load', () => {
//   setTimeout(() => {
//     preloder1.style.display = "none";

//     setTimeout(() => {
//       preloder2.style.display = "none";
//     }, 5000)
//   }, 5000)
// })