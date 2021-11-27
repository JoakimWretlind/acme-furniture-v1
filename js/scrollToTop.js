window.addEventListener("scroll", function () {
  let scroll = document.querySelector("#scrollToTop");
  scroll.classList.toggle("scrolled", window.scrollY > 100);
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}