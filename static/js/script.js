
let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;

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
  }, duration);
});

// Navbar background
// $(document).ready(function () {
//   $(window).scroll(function () {
//     let pos = $(window).scrollTop();
//     if (pos >= 28) {
//       $(".navbar-main-group").addClass("navbar-main-group2");
//       // $(".blacklogo").addClass("blacklogo2");
//       // $(".whitelogo").addClass("whitelogo2");
//     } else {
//       $(".navbar-main-group").removeClass("navbar-main-group2");
//       // $(".blacklogo").removeClass("blacklogo2");
//       // $(".whitelogo").removeClass("whitelogo2");
//     }
  
//   });
// });


// $('.NavigationMenuTrigger2').mouseenter('click', function() {
//   $('.navbar-main-group').css('background', 'white');
//   $('.NavigationMenuTrigger').css('color', 'black');
//   $('.CaretDown').css('color', 'black');
//   $('.blacklogo').css('display', 'block');
//   $('.whitelogo').css('display', 'none');
// });

// $('.NavigationMenuTrigger2').mouseleave('click', function() {
//   $('.navbar-main-group').css('background', 'rgba(37, 37, 37, 0.4)');
//   $('.NavigationMenuTrigger').css('color', 'white');
//   $('.CaretDown').css('color', 'white');
//   $('.blacklogo').css('display', 'none');
//   $('.whitelogo').css('display', 'block');
// });

// $('.ViewportPosition').mouseenter('click', function() {
//   $('.navbar-main-group').css('background', 'white');
//   $('.NavigationMenuTrigger').css('color', 'black');
//   $('.CaretDown').css('color', 'black');
//   $('.blacklogo').css('display', 'block');
//   $('.whitelogo').css('display', 'none');
// });

// $('.ViewportPosition').mouseleave('click', function() {
//   $('.navbar-main-group').css('background', 'rgba(37, 37, 37, 0.4)');
//   $('.NavigationMenuTrigger').css('color', 'white');
//   $('.CaretDown').css('color', 'white');
//   $('.blacklogo').css('display', 'none');
//   $('.whitelogo').css('display', 'block');
// });


// document.querySelectorAll('.tabs_main_service a').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//       e.preventDefault();

//       const targetId = this.getAttribute('href').substring(1); // Remove the '#'
//       const targetElement = document.getElementById(targetId);

//       if (targetElement) {
//           window.scrollTo({
//               top: targetElement.offsetTop,
//               behavior: 'smooth'
//           });
//       }
//   });
// });