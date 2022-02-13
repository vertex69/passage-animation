var stats = document.querySelector("#stats");
var lists = document.querySelector("#list");
var map = document.querySelector("#map");

stats.addEventListener("mouseenter", cardHover);
stats.addEventListener("mouseleave", cardOut);
lists.addEventListener("mouseenter", cardHover);
lists.addEventListener("mouseleave", cardOut);
map.addEventListener("mouseenter", cardHover);
map.addEventListener("mouseleave", cardOut);

// var wrapperr = document.querySelector(".wrapper");
// wrapperr.addEventListener("mousemove", mouseMoveFunc);
// wrapperr.addEventListener("mouseleave", out);

// let animId = null;
// let $wrapperEl = wrapperr;
// let wrapperHeight = wrapperr.offsetHeight;
// let wrapperWidth = wrapperr.offsetWidth;
// let wrapperOffsetLeft = wrapperr.offsetLeft;
// let wrapperOffsetTop = wrapperr.offsetTop;

// function returnScaledNum(min, max, x) {
//   return x * (max - min) - (max - min) / 2;
// }

// function out() {
//   gsap.to($wrapperEl, 0.8, {
//     transformPerspective: 500,
//     rotationX: 0,
//     rotationY: 0,
//   });
// }

// gsap.set($wrapperEl, {
//   transformPerspective: 500,
// });

// function mouseMoveFunc(evt) {
//   let y = evt.pageX - wrapperOffsetLeft;
//   let x = evt.pageY - wrapperOffsetTop;
//   let hoverWidthRatio = x / wrapperWidth;
//   let hoverHeightRatio = y / wrapperHeight;
//   let xRotate = returnScaledNum(-80, 80, hoverWidthRatio) * -0.2;
//   let yRotate = returnScaledNum(-30, 30, hoverHeightRatio) * -0.1;

//   gsap.to($wrapperEl, 0.2, {
//     transformPerspective: 500,
//     rotationX: xRotate,
//     rotationY: yRotate,
//   });
// }

function cardHover() {
  var statsHoverAnim = new gsap.timeline();

  statsHoverAnim.to(this, 1, {
    scale: 1.05,
    ease: Elastic.easeOut.config(0.5, 0.4),
  });

  if (this.id == "stats") {
    statsAnim(
      [
        "100%",
        "80%",
        "10%",
        "50%",
        "60%",
        "80%",
        "40%",
        "80%",
        "50%",
        "70%",
        "90%",
        "20%",
        "60%",
        "80%",
        "90%",
      ],
      450,
      [80, 250, 350],
      1.2
    );
  } else if (this.id == "map") {
    mapAnim(1.5);
  } else if (this.id == "list") {
    listAnim(listScroll.scrollHeight, 8);
  }
}

function cardOut() {
  var cardHoverOutAnim = new gsap.timeline();

  cardHoverOutAnim.to(this, 1, {
    scale: 1,
    ease: Elastic.easeOut.config(0.5, 0.4),
    zIndex: 1,
  });

  if (this.id == "stats") {
    statsAnim(
      [
        "90%",
        "20%",
        "60%",
        "80%",
        "90%",
        "100%",
        "10%",
        "30%",
        "60%",
        "50%",
        "10%",
        "50%",
        "70%",
        "80%",
        "30%",
      ],
      325,
      [300, 300, 300],
      1
    );
  } else if (this.id == "map") {
    mapAnim(1);
  } else if (this.id == "list") {
    listAnim(0, 2);
  }
}
