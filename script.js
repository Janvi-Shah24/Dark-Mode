let slider = document.querySelector(".toggle");
let circle = document.querySelector("#circle-logo");
let text = document.querySelector(".para");
let sun = document.querySelector("#on");
let moon = document.querySelector("#off");

// let isDarkMode = true;
// let lightMode = true;
document.body.style.backgroundColor = "white";

slider.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "black";
    text.style.color = "white";
    circle.style.left = "55%";
    circle.style.backgroundColor = "blue";
    text.style.color = "blue";
    // x.style.transform = rotate(${isDarkMode ? 360 : 0}deg);
    // isDarkMode = !isDarkMode;
    // x.style.transitionDuration = "0.5s";
    // text.style.transform = "translateX(-20px)";
    text.style.transform = "translateY(40px)";
    text.style.transitionDuration = "0.4s"
  } else {
    document.body.style.backgroundColor = "white";
    text.style.color = "black";
    circle.style.left = "2%";
    circle.style.backgroundColor = "white";
    text.style.color = "black";
    // y.style.transform = rotate(${lightMode ? 360 : 0}deg);
    // lightMode = !lightMode;
    // y.style.transitionDuration = ".5s";
    text.style.transform = "translateY(60px)";
    text.style.transitionDuration = "0.4s";
  }
});