const header = document.getElementById("header"),
  navMenu = document.getElementById("nav-menu"),
  navOpen = document.getElementById("nav-open"),
  navClose = document.getElementById("nav-close"),
  navLinks = document.querySelectorAll(".nav__link");

/* Change header style on scroll
---------------------------------------*/
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

/* Navigation Menu
---------------------------------------*/

// Open the nav menu
navOpen.addEventListener("click", () => {
  navMenu.classList.add("nav__menu--open");
});

// Close the nav menu
navClose.addEventListener("click", () => {
  navMenu.classList.remove("nav__menu--open");
});

// Close the nav menu when the user clicks on each nav link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu--open");
  });
});

/* Destination swiper 
----------------------------------------*/
let swiper = new Swiper(".destination__wrapper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 32,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper__next",
    prevEl: ".swiper__prev",
  },
});

/* Play and Pause Video 
---------------------------------------*/
const video = document.getElementById("video-tour"),
  videoBtn = document.getElementById("video-btn"),
  videoIcon = document.getElementById("video-icon");

function videoState() {
  if (video.paused) {
    // Play the video
    video.play();
    // Replace the play icon
    videoIcon.classList.replace("ri-play-fill", "ri-pause-fill");
  } else {
    // Pause the Video
    video.pause();
    // Replace the pause icon
    videoIcon.classList.replace("ri-pause-fill", "ri-play-fill");
  }
}

// Replace the pause icon when the video ends
video.addEventListener("ended", () => {
  videoIcon.classList.replace("ri-pause-fill", "ri-play-fill");
});

videoBtn.addEventListener("click", videoState);

/* 
Scrolltop 
----------------------------------------------*/
const scrollTop = document.getElementById("scrolltop");

function showScrollTop() {
  if (window.scrollY > 150) {
    scrollTop.classList.add("scrolltop--show");
  } else {
    scrollTop.classList.remove("scrolltop--show");
  }
}

window.addEventListener("scroll", showScrollTop);

/* 
Active link on scroll section */

function addActiveLink() {
  const section = document.querySelectorAll("section[id]");
  section.forEach((section) => {
    const scrollY = window.scrollY,
      sectionTop = section.offsetTop - 150,
      sectionHeight = section.offsetHeight,
      sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__link[href*=" + sectionId + "]")
        .classList.add("nav__link--active");
    } else {
      document
        .querySelector(".nav__link[href*=" + sectionId + "]")
        .classList.remove("nav__link--active");
    }
  });
}
window.addEventListener("scroll", addActiveLink);

// ScrollReveal Animation
const sr = ScrollReveal({
  distance: "100px",
  duration: 2000,
  delay: 400,
  reset: false,
});

sr.reveal(".home__content, .about__img, .offer__content", { origin: "left" });
sr.reveal(".home__img, .about__content, .offer__img", { origin: "right" });
sr.reveal(
  ".destination__wrapper, .video__content, .video__info, .newsletter__wrapper"
);
sr.reveal(".discover__item", { interval: 200, origin: "top" });
sr.reveal(".footer__content", { interval: 150 });



const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabButton.forEach(button => {
  button.addEventListener("click", () => {
    const id = button.dataset.id;

    // 모든 버튼에서 active 클래스 제거
    tabButton.forEach(btn => btn.classList.remove("active"));
    // 현재 클릭한 버튼에만 active 클래스 추가
    button.classList.add("active");

    // 모든 콘텐츠에서 active 클래스 제거
    contents.forEach(content => content.classList.remove("active"));
    
    // 선택한 버튼에 해당하는 p 엘리먼트에만 active 클래스 추가
    const element = document.getElementById(id);
    element.classList.add("active");
  });
});

const tabs1 = document.querySelector(".wrapper1");
const tabButton1 = document.querySelectorAll(".tab-button1");
const contents1 = document.querySelectorAll(".content1");

tabButton1.forEach(button => {
  button.addEventListener("click", () => {
    const id = button.dataset.id;

    // 모든 버튼에서 active 클래스 제거
    tabButton1.forEach(btn => btn.classList.remove("active1"));
    // 현재 클릭한 버튼에만 active 클래스 추가
    button.classList.add("active1");

    // 모든 콘텐츠에서 active 클래스 제거
    contents1.forEach(content => content.classList.remove("active1"));
    
    // 선택한 버튼에 해당하는 p 엘리먼트에만 active 클래스 추가
    const element = document.getElementById(id);
    element.classList.add("active1");
  });
});

function changeTab(tabIndex) {
  const tabButtons = document.querySelectorAll('.tab-button2');
  const tabContents = document.querySelectorAll('.tab-content2');

  // Deactivate all tabs
  tabButtons.forEach(button => button.classList.remove('active'));
  tabContents.forEach(content => content.classList.remove('active'));

  // Activate the clicked tab
  document.getElementById(`tab${tabIndex}`).classList.add('active');
  document.getElementById(`content${tabIndex}`).classList.add('active');
}
