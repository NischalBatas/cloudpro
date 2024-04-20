$(document).ready(function () {
  new WOW().init();

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 1,
    autoplay: true,
    dots: false,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      324: {
        items: 4,
      },
      680: {
        items: 6,
      },
      1100: {
        items: 8,
      },
    },
  });
});

let valueDisplays = document.querySelectorAll(".num");
let interval = 1;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, 150);
});
