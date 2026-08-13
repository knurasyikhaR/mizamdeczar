/* =========================================================
   SCROLL REVEAL
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  const revealElements = document.querySelectorAll(
    "#about .row, .history-card, .card-order, .our_team .card, .contact .info, #contactForm",
  );

  revealElements.forEach((element) => {
    element.classList.add("reveal");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
});
