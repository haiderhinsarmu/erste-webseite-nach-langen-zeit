const year = document.getElementById('year')
const now = new Date()
year.innerText = now.getFullYear()

const Login = document.getElementById('Login');
const menuLogin = document.getElementById('menu-Login');
const Logout = document.getElementById('Logout');
const menuLogout = document.getElementById('menu-Logout');
const username = document.getElementById('username');

const storedUsername = localStorage.getItem('username');
const storedToken = localStorage.getItem('token');

if (storedUsername && storedToken) {
  username.innerText = storedUsername;
  Login.style.display = "none";
  menuLogin.style.display = "none";
  Logout.style.display = "block";
  menuLogout.style.display = "block";
} else {
  Login.style.display = 'block';
  menuLogin.style.display = 'block';
  Logout.style.display = 'none';
  menuLogout.style.display = 'none';
}

Logout.addEventListener('click', () => {
  localStorage.removeItem('username');
  localStorage.removeItem('token');
  username.innerText = '';
  Login.style.display = 'block';
  menuLogin.style.display = 'block';
  Logout.style.display = 'none';
  menuLogout.style.display = 'none';
  alert('You have been logged out');
});



const navbarLinks = document.getElementById('navbar-links')
window.addEventListener('scroll', () => {
 if (window.scrollY > 0) {
    navbarLinks.classList.add('sticky')
  } else {
    navbarLinks.classList.remove('sticky')
  }
})


const skillImg = document.getElementById("skill-img")
const skillName = document.getElementById("skill-name")
const pText = document.getElementById("p-text")

const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")
const sliderDots = document.getElementById("slider-dots")
const dot = document.getElementById("dot") 


const Reviews = [

  {
    id: 0,
    name: "HTML",
    src: "/images/HTML.jpg",
    alt: "HTML image",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
  id: 1,
  name: "CSS",
  src: "/images/css.jpg",
  alt: "CSS image",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
},

{
  id: 2,
  name: "javascript",
  src: "/images/javascript.jpg",
  alt: "Node.js image",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
 },

 {
  id: 3,
  name: "React",
  src: "/images/react.jpg",
  alt: "React image",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
 },


 {
  id: 4,
  name: "Redux",
  src: "/images/redux.jpg",
  alt: "Redux image",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
 },

 {
  id: 5,
  name: "MongoDB",
  src: "/images/mongodb.jpg",
  alt: "MongoDB image",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
 },

 {
  id: 6,
  name: "Express.js",
  src: "/images/expressjs.jpg",
  alt: "Express.js image",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
 },
]

let currentItem = 0

window.addEventListener("DOMContentLoaded", () => {
  showReviews();
})

function showReviews(){
  const item = Reviews[currentItem];
  skillImg.src = item.src;
  skillName.textContent = item.name;
  pText.textContent = item.text;
}

prevBtn.addEventListener("click", () => {
  if (currentItem === 0) {
    currentItem = Reviews.length - 1;
  } else {
    currentItem--;
  }
  showReviews();
})

nextBtn.addEventListener("click", () => {
  if (currentItem === Reviews.length -1) {
    currentItem = 0;
  } else {
    currentItem++;
  }
  showReviews();
})
 
setInterval(() => {
  if (currentItem === Reviews.length -1) {
    currentItem = 0;
  } else {
    currentItem++;
  }
  showReviews();
}, 5000);


// toggle menu
const toggle = document.getElementById("toggle")
const line1 = document.getElementById("line1")
const line2 = document.getElementById("line2")
const line3 = document.getElementById("line3")
const mobileMenu = document.getElementById("mobile-menu")
toggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active")
  toggle.classList.toggle("active")
  line1.classList.toggle("active")
  line2.classList.toggle("active")
  line3.classList.toggle("active")
})