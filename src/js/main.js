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
const diagnosticSelect = document.querySelector(".custom-select");
const diagnosticPanel = document.querySelector(".diagnostics__panel");
const diagnosticResult = document.querySelector(".diagnostics__result");
const backLink = document.querySelector(".diagnostics__result-backlink");
const diagnosticSection = document.querySelector(".diagnostics");

if (diagnosticsBtn) {
  diagnosticsBtn.forEach((el) =>
    el.addEventListener("click", () => {
      diagnosticPanel.classList.add("diagnostics__panel--hide");
      diagnosticResult.classList.add("diagnostics__result--active");
    })
  );
}

if (diagnosticSelect) {
  diagnosticSelect.addEventListener("change", () => {
    diagnosticPanel.classList.add("diagnostics__panel--hide");
    diagnosticResult.classList.add("diagnostics__result--active");
    diagnosticSection.classList.add("active");
  });
}

backLink.addEventListener("click", () => {
  diagnosticResult.classList.remove("diagnostics__result--active");
  diagnosticPanel.classList.remove("diagnostics__panel--hide");
  diagnosticSection.classList.remove("active");
});

//? ==========================>
const submitFeedbackBtn = document.querySelector(".feedback__form-btn");
const alertWindow = document.querySelector(".alert");
const closeAlertWindow = document.querySelector(".alert__close");

submitFeedbackBtn.addEventListener("click", (e) => {
  e.preventDefault();
  alertWindow.classList.add("active");
  setTimeout(() => alertWindow.classList.remove("active"), 5000);
});
closeAlertWindow.addEventListener("click", () => {
  alertWindow.classList.remove("active");
});
