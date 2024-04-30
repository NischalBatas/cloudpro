$(document).ready(function () {
  new WOW().init();

  $(".partners-main .owl-carousel").owlCarousel({
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

  $(".industries-main .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    dots: false,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      324: {
        items: 2,
      },
      680: {
        items: 3,
      },
      1100: {
        items: 5,
      },
    },
  });

  $(".testominial-main .owl-carousel").owlCarousel({
    loop: true,
    margin: 40,
    autoplay: false,
    dots: false,
    nav: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      324: {
        items: 1,
      },
      680: {
        items: 1,
      },
      1226: {
        items: 2,
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
  }, 250);
});

// Navbar background
$(document).ready(function () {
  $(window).scroll(function () {
    let pos = $(window).scrollTop();
    if (pos >= 50) {
      $(".navbar-main-group").addClass("navbar-main-group2");
      $(".blacklogo").addClass("blacklogo2");
      $(".whitelogo").addClass("whitelogo2");
    } else {
      $(".navbar-main-group").removeClass("navbar-main-group2");
      $(".blacklogo").removeClass("blacklogo2");
      $(".whitelogo").removeClass("whitelogo2");
    }
  
  });
});
