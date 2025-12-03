/*
 * @Author: lmingul
 * @Date: 2025-11-30 13:23:16
 * @LastEditors: lmingul
 * @LastEditTime: 2025-11-30 13:25:13
 * @FilePath: \font-test\vue3-project\test\app.js
 * @Description:
 */
// State
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const progressBar = document.getElementById("progressBar");
const slideCounter = document.getElementById("slideCounter");

// Initialization
function updateSlide() {
  slides.forEach((slide, index) => {
    slide.classList.remove("active", "prev");
    if (index === currentSlide) {
      slide.classList.add("active");
      // Reset animations by re-adding classes if needed,
      // or simple CSS transitions handle the slide switching.
      // For text animations to replay, we can toggle a class on content
    } else if (index < currentSlide) {
      slide.classList.add("prev");
    }
  });

  // Update UI
  const progress = ((currentSlide + 1) / totalSlides) * 100;
  progressBar.style.width = `${progress}%`;
  slideCounter.textContent = `0${currentSlide + 1} / 0${totalSlides}`;
}

function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateSlide();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlide();
  }
}

function goToSlide(index) {
  currentSlide = index;
  updateSlide();
}

// Keyboard Navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
    nextSlide();
  } else if (e.key === "ArrowLeft") {
    prevSlide();
  }
});

// Click navigation (optional, click right side to next, left to prev)
// document.body.addEventListener('click', (e) => {
//     if(e.target.tagName !== 'BUTTON') {
//         if(e.clientX > window.innerWidth / 2) nextSlide();
//         else prevSlide();
//     }
// });

// Initial call
updateSlide();
