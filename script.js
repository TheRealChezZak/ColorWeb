let box = document.querySelector("div");
let input = document.querySelector("input");

input.addEventListener("keyup", () => {
  box.style.borderRadius = input.value + "px";
  box.style.background = input.value;
});
