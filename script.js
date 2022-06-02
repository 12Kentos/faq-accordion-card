"use strict";
const faqs = document.querySelectorAll(".faq-card__text__container");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
