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
// close banner =============
document.querySelector(".close-svg").addEventListener("click", () => {
  document.querySelector(".hero__banner").classList.add("close");
});
//==========================>

//? Вот тут я 40 минут думал как сколько угодно независимых кружков заполнить, оказалось все очень просто!
const circle = document.querySelectorAll(".progress");
const percentArray = [];
document
  .querySelectorAll(".percent")
  .forEach((el) => percentArray.push(parseInt(el.innerHTML)));

circle.forEach((el, idx) => {
  const progressAnimation = () => {
    let radius = el.getAttribute("r");
    let circleLength = 2 * Math.PI * radius;
    el.setAttribute("stroke-dasharray", circleLength);
    el.setAttribute(
      "stroke-dashoffset",
      circleLength - (circleLength * parseInt(percentArray[idx])) / 100
    );
  };

  progressAnimation();
});
//====================================================>

const diagnosticsBtn = document.querySelectorAll(".diagnostics__btn");
const diagnosticPanel = document.querySelector(".diagnostics__panel");
const diagnosticResult = document.querySelector(".diagnostics__result");
const backLink = document.querySelector(".diagnostics__result-backlink");

const getDiagnosticsResult = () => {
  diagnosticPanel.classList.add("diagnostics__panel--hide");
  diagnosticResult.classList.add("diagnostics__result--active");
};
diagnosticsBtn.forEach((el) =>
  el.addEventListener("click", getDiagnosticsResult)
);
backLink.addEventListener("click", () => {
  diagnosticResult.classList.remove("diagnostics__result--active");
  diagnosticPanel.classList.remove("diagnostics__panel--hide");
});
