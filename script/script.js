document.getElementById("burger").addEventListener("click", function () {
  document.querySelector("header").classList.toggle("open");
});

let slider = tns({
  container: ".slider",
  slideBy: "1",
  speed: 400,
  nav: false,
  autoplay: true,
  controls: false,
  mouseDrag: true,
  autoplayButtonOutput: false,
  responsive: {
    1600: {
      items: 4,
    },
    1440: {
      items: 3,
    },
    800: {
      items: 2,
    },
    768: {
      items: 2,
    },
  },
});
