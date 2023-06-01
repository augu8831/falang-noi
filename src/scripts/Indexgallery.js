window.addEventListener("load", sidenVises);

function sidenVises() {
  const carousel = document.querySelector(".carousel"),
    firstImg = carousel.querySelectorAll("img")[0];
  arrowIcons = document.querySelectorAll(".wrapper i");

  let isDragginStart = false,
    prevPageX,
    PrevScrollLeft;

  let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value

  let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width

  const showHideIcons = () => {
    // showing and hiding prev/next icon acording to carousel scroll left value
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
  };

  arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
      setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
  });

  const dragStart = (e) => {
    isDragginStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    PrevScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragginStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = PrevScrollLeft - positionDiff;
    showHideIcons();
  };

  const dragStop = () => {
    isDragginStart = false;
    carousel.classList.remove("dragging");
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("touchstart", dragStart);

  carousel.addEventListener("mousemove", dragging);
  carousel.addEventListener("touchmove", dragging);

  carousel.addEventListener("mouseup", dragStop);
  carousel.addEventListener("mouseleave", dragStop);
  carousel.addEventListener("touched", dragStop);
}
//   firstImg = carousel.querySelectorAll("img")[0];
// arrowIcons = document.querySelectorAll(".wrapper i");

// let isDragStart = false,
//   prevPageX,
//   PrevScrollLeft;

// let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value

// arrowIcons.forEach((icon) => {
//   icon.addEventListener("click", () => {
// if clicked icon is left, reduce width value for carousel scroll left else add to it
//     carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
//   });
// });

// const dragStart = (e) => {
// Updating global variables value on mouse down event
//   isDragStart = true;
//   prevPageX = e.pageX;
//   PrevScrollLeft = carousel.ScrollLeft;
// };

// const dragging = (e) => {
// scrolling images/carousel to left acordring to mouse pointer
//   if (!isDragStart) return;
//   e.preventDefault();
//   let positionDiff = e.pageX - prevPageX;
//   carousel.ScrollLeft = PrevScrollLeft - positionDiff;
// };

// const dragStop = () => {
//   isDragStart = false;
// };

// const dragStop = () => {
//   isDragStart = true;
// };

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("mouseup", dragStop);
