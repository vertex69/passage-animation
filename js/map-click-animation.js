var map = document.querySelector("#map");
var mapCloseButton = document.querySelector("#map-close");
var video = document.querySelector("#video");
var clickMapAnim = gsap.timeline();
var mapPopup = document.querySelector("#map-popup");

map.addEventListener("click", mapZoomed);
mapCloseButton.addEventListener("click", mapNormalize);

function mapZoomed() {
  video.play();

  clickMapAnim.to(mapPopup, 1, {
    opacity: 1,
    scale: 1,
    ease: Elastic.easeOut.config(1, 0.5),
  });

  mapPopup.style.zIndex = 20;
}

function mapNormalize() {
  video.pause();

  clickMapAnim.to(mapPopup, 1, {
    opacity: 0,
    scale: 0.01,
    ease: Elastic.easeOut.config(1, 0.5),
  });
}
