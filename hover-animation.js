var stats = document.querySelector("#stats");
var lists = document.querySelector("#list");
var map = document.querySelector("#map");

stats.addEventListener("mouseenter", cardHover);
stats.addEventListener("mouseleave", cardOut);
lists.addEventListener("mouseenter", cardHover);
lists.addEventListener("mouseleave", cardOut);
map.addEventListener("mouseenter", cardHover);
map.addEventListener("mouseleave", cardOut);

var wrapperr = document.querySelector(".wrapper");
wrapperr.addEventListener("mousemove", mouseMoveFunc);
wrapperr.addEventListener("mouseleave", out);

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

var listScrollValue = {
  value: 0,
};
function cardHover() {
  var statsHoverAnim = new gsap.timeline();
  var statsShakes = new gsap.timeline();
  var mapShakes = new gsap.timeline();
  var listShakes = new gsap.timeline();
  var listScroll = document.querySelector("#list-content");

  statsHoverAnim.to(this, 1, {
    scale: 1.05,
    zIndex: 5,
    ease: Elastic.easeOut.config(0.5, 0.4),
  });
  if (this.id == "stats") {
    statsShakes
      .to(
        ship,
        0.5,
        {
          count: 450,
          ease: Power2.easeOut,
          onUpdate: function () {
            shipCount.innerHTML = Math.round(ship.count);
          },
        },
        0.1
      )
      .to(".main-circles", 1, {
        strokeDashoffset: gsap.utils.wrap([80, 250, 350]),
        ease: Elastic.easeOut.config(0.5, 0.4),
      })
      .to(
        ".bars",
        1,
        {
          height: gsap.utils.wrap([
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
          ]),
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
  } else if (this.id == "map") {
    mapShakes.to(".map-image", 1, {
      scale: 1.5,
    });
  } else if (this.id == "list") {
    listShakes.to(listScrollValue, 7, {
      value: listScroll.scrollHeight,
      duration: 5,
      ease: Power4.easeOut,
      onUpdate: function () {
        listScroll.scrollTo(0, listScrollValue.value);
      },
    });
  }
}

function cardOut() {
  var cardHoverOutAnim = new gsap.timeline();
  var listScroll = document.querySelector("#list-content");

  cardHoverOutAnim.to(this, 1, {
    scale: 1,
    ease: Elastic.easeOut.config(0.5, 0.4),
    zIndex: 1,
  });

  var statsShakes = new gsap.timeline();
  var mapShakes = new gsap.timeline();
  var listShakes = new gsap.timeline();

  if (this.id == "stats") {
    statsShakes
      .to(
        ship,
        0.5,
        {
          count: 350,
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
          height: gsap.utils.wrap([
            "90%",
            "20%",
            "60%",
            "80%",
            "90%",
            "100%",
            "10%",
            "80%",
            "60%",
            "50%",
            "10%",
            "50%",
            "70%",
            "80%",
            "30%",
          ]),
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
          scale: 1,
          ease: Elastic.easeOut.config(0.5, 0.4),
          stagger: {
            each: 0.2,
          },
        },
        0.1
      );
  } else if (this.id == "map") {
    mapShakes.to(".map-image", 2, {
      scale: 1,
    });
  } else if (this.id == "list") {
    listShakes.to(listScrollValue, 2, {
      value: 0,
      ease: Power4.easeOut,
      onUpdate: function () {
        listScroll.scrollTo(0, listScrollValue.value);
      },
    });
  }
}
