const smoothLinks = document.querySelectorAll(".nav__link");
const menu = document?.querySelector("[data-menu]");
const burger = document?.querySelector("[data-burger]");
const callBtn = document.querySelectorAll(".header__right-btn");

for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    menu.classList.remove("nav--active");
    burger.classList.remove("burger--active");
    document.body.classList.remove("lock");
  });
}

for (let el of callBtn) {
  el.addEventListener("click", function (e) {
    e.preventDefault();

    const id = el.getAttribute("href");
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    menu.classList.remove("nav--active");
    burger.classList.remove("burger--active");
    document.body.classList.remove("lock");

    setTimeout(
      () => document.querySelector(".feedback__form-input").focus(),
      500
    );
  });
}
