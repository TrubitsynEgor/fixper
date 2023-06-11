const accordion = document.querySelectorAll(".accordion__title");
const accordionBtn = document.querySelectorAll(".accordion__btn");
const accordionBody = document.querySelectorAll(".accordion__body");

accordion.forEach((el) => {
  el.addEventListener("click", (event) => {
    let content = el.nextElementSibling;
    accordion.forEach((el) => el.classList.remove("active"));
    if (content.classList.contains("active")) {
      accordionBody.forEach((el) => el.classList.remove("active"));
      el.classList.remove("active");
    } else {
      accordionBody.forEach((el) => el.classList.remove("active"));
      content.classList.add("active");
      el.classList.add("active");
    }
  });
});
