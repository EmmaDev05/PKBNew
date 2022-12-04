"use strict";

window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};

/* Sidebar menu */
// close hamburger menu after click a
$(".menu-list li a").on("click", function () {
  $("#hamburger-menu").click();
});

/* Button */
// $(".btn").mouseup(function() {
//     $(this).blur();
// });

// $(".owl-dot").mouseup(function() {
//     $(this).blur();
// });

/* Follow Us */
$(".carousel-1").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1400: {
      items: 4,
    },
    1600: {
      items: 5,
    },
    2200: {
      items: 6,
    },
  },
});
