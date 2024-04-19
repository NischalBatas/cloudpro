$(document).ready(function(){

    new WOW().init();


    $(".team .owl-carousel").owlCarousel({
        loop: true,
        margin: 5,
        autoplay: false,
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
            items: 7,
          }
        },
      });

    })



    let valueDisplays = document.querySelectorAll(".num");
    let interval = 1;
    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1 ;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
    