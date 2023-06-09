import "./_vendor";
import vars from "./_vars";
import "./_functions";
import "./_components";

("use-strict");

window.addEventListener("scroll", () => {
  const scroll = window.pageYOffset;
  if (scroll > 500) {
    document.querySelector(".header").classList.add("fixed");
  }
  if (scroll < 500) {
    document.querySelector(".header").classList.remove("fixed");
  }
});

document.querySelector(".close-svg").addEventListener("click", () => {
  document.querySelector(".hero__banner").classList.add("close");
});
