const heart = document.querySelector(".main-heart");
const redHeart = document.querySelector(".red-heart");

heart.addEventListener("click", () => {
  redHeart.classList.add("animation");
  heart.classList.add("fill-color");
});

redHeart.addEventListener("click", () => {
  redHeart.classList.remove("animation");
  heart.classList.remove("fill-color");
});
