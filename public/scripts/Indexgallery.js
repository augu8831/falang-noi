let slider = tns({
  container: ".my-slider",
  "slide-By": 1,
  speed: 400,
  nav: false,
  controlsContainer: "#control",
  prevButton: ".preivous",
  nextButton: ".next",
  resposive: {
    1600: {
      items: 4,
      gutter: 20,
    },

    1024: {
      items: 3,
      gutter: 20,
    },

    768: {
      items: 2,
      gutter: 20,
    },

    450: {
      items: 1,
      gutter,
    },
  },
});
