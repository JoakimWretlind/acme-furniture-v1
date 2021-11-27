const video1 = document.querySelector(".video1");
const video2 = document.querySelector(".video2");
const video3 = document.querySelector(".video3");

let counter = 0;

video1.onended = function () {
  video2.play();
  video1.style.opacity = 0;
  video2.style.opacity = 1;
  video3.style.opacity = 0;
};
video2.onended = function () {
  video3.play();
  video1.style.opacity = 0;
  video2.style.opacity = 0;
  video3.style.opacity = 1;
};
video3.onended = function () {
  video1.play();
  video1.style.opacity = 1;
  video2.style.opacity = 0;
  video3.style.opacity = 0;
};
