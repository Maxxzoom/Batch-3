// toggle for navbar
const togglebtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

togglebtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// carousel
// document.addEventListener("DOMContentLoaded", () => {
//   let currentIndex = 0;
//   const slides = document.querySelectorAll(".slide");
//   const dots = document.querySelectorAll(".dot");
//   const prevBtn = document.querySelector(".prev");
//   const nextBtn = document.querySelector(".next");
//   console.log(slides.length);
//   console.log(dots);

//   function showSlide(index) {
//     slides.forEach((slide) => slide.classList.remove("active"));
//     dots.forEach((slide) => slide.classList.remove("active"));
//     slides[index].classList.add("active");
//     dots[index].classList.add("active");
//   }

//   function nextSlide() {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
//   }
//   function prevSlide() {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     showSlide(currentIndex);
//   }

//   dots.forEach((dot) => {
//     dot.addEventListener("click", (e) => {
//       currentIndex = parseInt(e.target.dataset.index);
//       showSlide(currentIndex)
//     });
//   });
//   nextBtn.addEventListener("click", nextSlide);
//   prevBtn.addEventListener("click", prevSlide);

// });

// autocarousel
let currentIndex = 0;

function autoSlideCarousel() {
  console.log("timer called");
  const carouselInner = document.querySelector(".carousel-inner");
  const totalSlides = document.querySelectorAll(".carousel-item");
  currentIndex = (currentIndex + 1) % totalSlides.length;
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%) `;
}

// Auto slide every 2 second
setInterval(autoSlideCarousel, 3000);
