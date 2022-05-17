let slidePosition = 0;
const slides = document.getElementsByClassName("carousel-element");
const slidesLengh = slides.length;

document.getElementById("mainbutton").addEventListener("click", () => {
  changeSlide();
});
changeSlide = () => {
  console.log(slidePosition);
  if (slidePosition != 9) {
    slides[slidePosition].classList.remove("carousel-element-visible");
    slidePosition++;
    slides[slidePosition].classList.add("carousel-element-visible");
  }
};
