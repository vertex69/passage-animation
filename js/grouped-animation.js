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
function callOutLines(
  timeline,
  line,
  circleInner,
  circleOuter,
  targetCardPosition,
  text
) {
  var callOutLinesClass = document.querySelector("#callout-lines");

  callOutLinesClass.style.top = targetCardPosition.offsetHeight - 100;
  callOutLinesClass.style.right = targetCardPosition.offsetWidth - 500;

  timeline
    .from(circleInner, 1, {
      scale: 0,
      ease: Elastic.easeOut.config(0.5, 0.4),
    })
    .from(circleOuter, 1, {
      scale: 0,
      ease: Elastic.easeOut.config(0.5, 0.4),
    })
    .to(line, 1, {
      strokeDashoffset: 110,
    })
    .from(text, 1, {
      opacity: 0,
      ease: Power4.easeOut,
    })
    .to(circleInner, 5, {
      scale: 1,
      ease: Elastic.easeOut.config(0.5, 0.4),
    })
    .to(circleOuter, 5, {
      scale: 1,
      ease: Elastic.easeOut.config(0.5, 0.4),
    })
    .to(line, 5, {
      strokeDashoffset: 110,
    })
    .to(text, 5, {
      opacity: 1,
      ease: Power4.easeOut,
    })
    .to(text, 1, {
      opacity: 0,
      ease: Power4.easeOut,
    })
    .to(line, 1, {
      strokeDashoffset: 450,
    })
    .to(circleOuter, 1, {
      scale: 0,
      ease: Elastic.easeOut.config(0.5, 0.4),
    })
    .to(circleInner, 1, {
      scale: 0,
      ease: Elastic.easeOut.config(0.5, 0.4),
    });
}

// //perspective pan animation
// function perspectivePan(target, progression, degree) {
//   contentAnim.to(target, progression, {
//     transform: "rotate(" + degree + "deg)",
//   });
// }
