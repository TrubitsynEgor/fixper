const showCostsBtn = document.querySelector(".costs__btn--open");
const hideCostsBtn = document.querySelector(".costs__btn--close");
const additionalCosts = document.querySelectorAll(".cost__table--additional");
const costsSection = document.querySelector(".costs");

showCostsBtn.addEventListener("click", () => {
  additionalCosts.forEach((el) => {
    el.classList.remove("hide");
  });
  hideCostsBtn.classList.remove("costs__btn--hide");
  showCostsBtn.classList.add("costs__btn--hide");
});

hideCostsBtn.addEventListener("click", () => {
  additionalCosts.forEach((el) => {
    el.classList.add("hide");
  });

  costsSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  showCostsBtn.classList.remove("costs__btn--hide");
  hideCostsBtn.classList.add("costs__btn--hide");
});
