const input = document.querySelector("input");
const eyeOpen = document.querySelector(".eye-open");
const eyeClose = document.querySelector(".eye-close");

eyeOpen.addEventListener("click", () => {
  input.type = "text";
  eyeOpen.style.display = "none";
  eyeClose.style.display = "block";
});

eyeClose.addEventListener("click", () => {
  input.type = "password";
  eyeOpen.style.display = "block";
  eyeClose.style.display = "none";
});
