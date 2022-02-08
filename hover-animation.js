var wrapperr = document.querySelector(".wrapper");
var stats = document.querySelector("#stats");
var lists = document.querySelector("#list");
var map = document.querySelector("#map");

wrapperr.addEventListener("mousemove", mouseMoveFunc);
wrapperr.addEventListener("mouseleave", out);

stats.addEventListener("mouseenter", cardHover);
stats.addEventListener("mouseleave", cardOut);
lists.addEventListener("mouseenter", cardHover);
lists.addEventListener("mouseleave", cardOut);
map.addEventListener("mouseenter", cardHover);
map.addEventListener("mouseleave", cardOut);

let animId = null;
let $wrapperEl = wrapperr;
let wrapperHeight = wrapperr.offsetHeight;
let wrapperWidth = wrapperr.offsetWidth;
let wrapperOffsetLeft = wrapperr.offsetLeft;
let wrapperOffsetTop = wrapperr.offsetTop;

function returnScaledNum(min, max, x) {
  return x * (max - min) - (max - min) / 2;
}

function out() {
  gsap.to($wrapperEl, 0.8, {
    transformPerspective: 500,
    rotationX: 0,
    rotationY: 0,
  });
}

gsap.set($wrapperEl, {
  transformPerspective: 500,
});

function mouseMoveFunc(evt) {
  let y = evt.pageX - wrapperOffsetLeft;
  let x = evt.pageY - wrapperOffsetTop;
  let hoverWidthRatio = x / wrapperWidth;
  let hoverHeightRatio = y / wrapperHeight;
  let xRotate = returnScaledNum(-80, 80, hoverWidthRatio) * -0.2;
  let yRotate = returnScaledNum(-30, 30, hoverHeightRatio) * -0.1;

  gsap.to($wrapperEl, 0.2, {
    transformPerspective: 500,
    rotationX: xRotate,
    rotationY: yRotate,
  });
}

function cardHover() {
  var statsHoverAnim = new gsap.timeline();
  var statsShakes = new gsap.timeline();

  statsHoverAnim.to(this, 1, {
    scale: 1.05,
    zIndex: 5,
    ease: Elastic.easeOut.config(0.5, 0.4),
  });
  if (this.id == "stats") {
    statsShakes
      .to(
        ship,
        .5,
        {
          count: 359,
          ease: Power2.easeOut,
          onUpdate: function () {
            shipCount.innerHTML = Math.round(ship.count);
          },
        },
        0.1
      )
      .to(".main-circles", 1, {
        strokeDashoffset: 300,
        ease: Elastic.easeOut.config(0.5, 0.4),
      })
      .to(
        ".bars",
        1,
        {
          height: ["100%","80%","10%","50%","60%","80%","40%","80%","50%","70%","90%","20%","60%","80%","90%"],
          ease: Elastic.easeOut.config(0.5, 0.4),
          stagger: {
            each: 0.08,
          },
        },
        0.1
      )
      .to(
        ".labels",
        1,
        {
          scale: 1.2,
          ease: Elastic.easeOut.config(0.5, 0.4),
          stagger: {
            each: 0.2,
          },
        },
        0.1
      );
  }
}
function cardOut() {
  var statsOutAnim = new gsap.timeline();

  statsOutAnim.to(this, 1, {
    scale: 1,
    ease: Elastic.easeOut.config(0.5, 0.4),
    zIndex: 1,
  });
}
