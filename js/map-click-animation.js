var map = document.querySelector("#map");
var mapCloseButton = document.querySelector("#map-close");
var video = document.querySelector("#video");
var mapPopup = document.querySelector("#map-popup");
var timer = {
  value: 0,
};

function mapZoomed(timeline) {
  let src = video.currentSrc || video.src;
  console.log(video, src);

  /* Make sure the video is 'activated' on iOS */
  function once(el, event, fn, opts) {
    var onceFn = function (e) {
      el.removeEventListener(event, onceFn);
      fn.apply(this, arguments);
    };
    el.addEventListener(event, onceFn, opts);
    return onceFn;
  }

  once(document.documentElement, "touchstart", function (e) {
    video.play();
    video.pause();
  });

  /* ---------------------------------- */
  /* Scroll Control! */

  once(video, "loadedmetadata", () => {
    timeline.fromTo(
      video,
      {
        currentTime: 0,
      },
      {
        currentTime: video.duration || 1,
      }
    );
  });

  /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, 
  but it doesn't seem to be a problem now. Possibly based on memory availability? */
  setTimeout(function () {
    if (window["fetch"]) {
      fetch(src)
        .then((response) => response.blob())
        .then((response) => {
          var blobURL = URL.createObjectURL(response);

          var t = video.currentTime;
          once(document.documentElement, "touchstart", function (e) {
            video.play();
            video.pause();
          });

          video.setAttribute("src", blobURL);
          video.currentTime = t + 0.01;
        });
    }
  }, 1000);

  mapPopup.style.zIndex = 20;
}
