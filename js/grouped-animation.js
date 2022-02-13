var contentAnim = new gsap.timeline();

var listScrollValue = {
  value: 0,
};
var listScroll = document.querySelector("#list-content");

//for statistic card
function statsAnim(
  timeline,
  barArray,
  shipNumber,
  dashOffset,
  scaleP,
  progress
) {
  timeline
    .to(ship, progress, {
      count: shipNumber,
      ease: Power2.easeOut,
      onUpdate: function () {
        shipCount.innerHTML = Math.round(ship.count);
      },
    })
    .to(".main-circles", progress, {
      strokeDashoffset: gsap.utils.wrap(dashOffset),
      ease: Elastic.easeOut.config(0.5, 0.4),
    })
    .to(".bars", progress, {
      height: gsap.utils.wrap(barArray),
      ease: Elastic.easeOut.config(0.5, 0.4),
      stagger: {
        each: 0.8,
      },
    })
    .to(".labels", progress, {
      scale: scaleP,
      ease: Elastic.easeOut.config(0.5, 0.4),
      stagger: {
        each: 2,
      },
    });
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
