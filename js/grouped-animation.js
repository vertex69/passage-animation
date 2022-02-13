var contentAnim = new gsap.timeline();

var listScrollValue = {
  value: 0,
};
var listScroll = document.querySelector("#list-content");

//for statistic card
function statsAnim(barArray, shipNumber, dashOffset, scaleP) {
  var statsShakes = new gsap.timeline();

  statsShakes
    .to(
      ship,
      0.5,
      {
        count: shipNumber,
        ease: Power2.easeOut,
        onUpdate: function () {
          shipCount.innerHTML = Math.round(ship.count);
        },
      },
      0.1
    )
    .to(".main-circles", 1, {
      strokeDashoffset: gsap.utils.wrap(dashOffset),
      ease: Elastic.easeOut.config(0.5, 0.4),
    })
    .to(
      ".bars",
      1,
      {
        height: gsap.utils.wrap(barArray),
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
        scale: scaleP,
        ease: Elastic.easeOut.config(0.5, 0.4),
        stagger: {
          each: 0.2,
        },
      },
      0.1
    );
}

//for map card animation
function mapAnim(mapScale) {
  var mapShakes = new gsap.timeline();

  mapShakes.to(".map-image", 2, {
    scale: mapScale,
  });
}

//for list animation
function listAnim(scrolVal, duration) {
  var listShakes = new gsap.timeline();

  listShakes.to(listScrollValue, duration, {
    value: scrolVal,
    ease: Power4.easeOut,
    onUpdate: function () {
      listScroll.scrollTo(0, listScrollValue.value);
    },
  });
}

// //perspective pan animation
// function perspectivePan(target, progression, degree) {
//   contentAnim.to(target, progression, {
//     transform: "rotate(" + degree + "deg)",
//   });
// }