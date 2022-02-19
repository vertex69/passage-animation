var map = document.querySelector("#map");
var mapCloseButton = document.querySelector("#map-close");
var video = document.querySelector("#video");
var mapPopup = document.querySelector("#map-popup");

var timer = {
  value: 0,
};

function mapZoomed(timeline) {
  timeline
    .to(mapPopup, 1, {
      opacity: 1,
      scale: 1,
      ease: Elastic.easeOut.config(1, 0.5),
      zIndex: 20,
    })
    .to(playhead, {
      frame: animation.totalFrames - 1,
      duration: 10,
      ease: "none",
      onUpdate: () => animation.goToAndStop(playhead.frame, true),
    })
    .to(mapPopup, 10, {
      duration: 5,
      opacity: 0,
      scale: 0,
      ease: Elastic.easeOut.config(1, 0.5),
      zIndex: 1,
    })
    .to("#map", 3, {
      scale: 1,
      ease: Elastic.easeOut.config(0.5, 0.4),
    });
}
