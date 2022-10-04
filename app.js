const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener("click", () => {
  counter++;
  carousel();
});
prevBtn.addEventListener("click", () => {
  counter--;
  carousel();
});
function carousel() {
  slides.forEach((slide) => {
    if (counter < 0) {
      counter = slides.length - 1;
    }
    if (counter === slides.length) {
      counter = 0;
    }
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
