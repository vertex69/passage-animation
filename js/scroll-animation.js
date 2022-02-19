var statCard = document.querySelector("#stats");

let playhead = { frame: 0 },
  animation = lottie.loadAnimation({
    container: document.querySelector(".lottie-map"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "https://uploads-ssl.webflow.com/620542c9fe579c85d0db3159/6210c698bce6b164a2f4cf48_passage-map-scene.json",
  });

var ship = {
  count: 0,
};

var statsBarEntrance = [
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
];
var statsBarCircles = [80, 250, 350];
var statsShipCountsEntrance = 450;
var statsEntranceScale = 1.2;

var statsBarExit = [
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
];
var statsBarCirclesExit = [300, 300, 300];
var statsShipCountsExit = 325;
var statsScaleExit = 1;

animation.addEventListener("DOMLoaded", function () {
  var entranceAnim = new gsap.timeline({
    scrollTrigger: {
      trigger: "#master-container",
      start: "top",
      end: "+=5000",
      scrub: 1,
    },
  });
  var shipCount = document.querySelector(".number");

  // entrance animation

  entranceAnim
    .from(".ui-container", 1, {
      scale: 0,
      y: "100vh",
      ease: Back.easeOut.config(2),
    })
    .from(
      ".card",
      2,
      {
        scale: 0,
        ease: Elastic.easeOut.config(0.5, 0.4),
        stagger: {
          each: 0.2,
        },
      },
      0.5
    )
    .from(
      ".top",
      0.5,
      {
        y: "-100px",
        ease: Power3.easeOut,
      },
      0.7
    )
    .from(
      ".side",
      1,
      {
        x: "-500px",
        ease: Power3.easeOut,
      },
      0.8
    )
    .from(
      ".map-image",
      2,
      {
        scale: 3,
      },
      0.9
    )
    .from(
      ".grays",
      1,
      {
        r: 0,
        ease: Elastic.easeOut.config(0.5, 0.4),
        stagger: {
          each: 0.2,
        },
      },
      0.9
    )
    .to(
      ship,
      2.5,
      {
        count: 350,
        ease: Power2.easeOut,
        onUpdate: function () {
          shipCount.innerHTML = Math.round(ship.count);
        },
      },
      0.9
    )
    .from(
      ".lines",
      1,
      {
        width: 0,
        ease: Elastic.easeOut.config(0.5, 0.4),
        stagger: {
          each: 0.2,
        },
      },
      0.9
    )
    .from(
      ".main-circles",
      2.5,
      {
        strokeDashoffset: 440,
        ease: Elastic.easeOut.config(0.5, 0.4),
      },
      1.5
    )
    .from(
      ".bars",
      1,
      {
        height: 0,
        ease: Elastic.easeOut.config(0.5, 0.4),
        stagger: {
          each: 0.08,
        },
      },
      1.5
    )
    .from(
      ".labels",
      1,
      {
        scale: 0,
        ease: Elastic.easeOut.config(0.5, 0.4),
        stagger: {
          each: 0.2,
        },
      },
      1.7
    )
    .from(
      "th",
      1,
      {
        opacity: 0,
        y: "-50px",
        ease: Elastic.easeOut.config(0.5, 0.4),
        stagger: {
          each: 0.2,
        },
      },
      0.9
    )
    .from(
      "tr",
      1,
      {
        opacity: 0,
        x: "-50px",
        ease: Elastic.easeOut.config(0.5, 0.4),
        stagger: {
          each: 0.2,
        },
      },
      0.9
    )
    // content animation
    .to("#ui-container", 3, {
      transform: "rotateY(-6deg)",
      ease: Elastic.easeOut.config(0.5, 0.4),
    })
    .to("#stats", 3, {
      scale: 1.08,
      ease: Elastic.easeOut.config(0.5, 0.4),
    });

  statsAnim(
    entranceAnim,
    statsBarEntrance,
    statsShipCountsEntrance,
    statsBarCircles,
    statsEntranceScale,
    1.5
  );
  // callOutLines(
  //   entranceAnim,
  //   ".callout-line",
  //   ".inner-callout-circle",
  //   ".outer-callout-circle",
  //   stats,
  //   ".stats-text"
  // );
  statsAnim(
    entranceAnim,
    statsBarExit,
    statsShipCountsExit,
    statsBarCirclesExit,
    statsScaleExit,
    1.5
  );
  entranceAnim
    .to("#stats", 3, {
      scale: 1,
      ease: Elastic.easeOut.config(0.5, 0.4),
    })
    .to("#ui-container", 3, {
      transform: "rotateY(6deg)",
      ease: Elastic.easeOut.config(0.5, 0.4),
    })
    .to("#map", 3, {
      scale: 1.08,
      ease: Elastic.easeOut.config(0.5, 0.4),
    })
    .to("#map-popup", 1, {
      opacity: 1,
      scale: 1,
      ease: Elastic.easeOut.config(1, 0.5),
      zIndex: 20,
    })
    .to(playhead, {
      frame: animation.totalFrames - 1,
      duration: 500,
      ease: "none",
      onUpdate: () => animation.goToAndStop(playhead.frame, true),
    })
    .to("#map-popup", 10, {
      duration: 5,
      opacity: 0,
      scale: 0,
      ease: Elastic.easeOut.config(1, 0.5),
      zIndex: 1,
    })
    .to("#map", 3, {
      scale: 1,
      ease: Elastic.easeOut.config(0.5, 0.4),
    })
    .from("#message", 10, {
      opacity: 0,
      scale: 0,
      ease: Elastic.easeOut.config(0.5, 0.4),
    })
    .to("#message", 10, {
      scale: 0.9,
      ease: Elastic.easeOut.config(0.5, 0.4),
    })
    .to("#message", 10, {
      opacity: 0,
      scale: 0,
      ease: Elastic.easeOut.config(0.5, 0.4),
    })
    .to("#crm", 1, {
      scale: 0,
      ease: Power4.easeOut,
    });
  entranceAnim
    .to("#ui-container", 3, {
      transform: "rotateY(6deg)",
      ease: Elastic.easeOut.config(0.5, 0.4),
    })
    .from("#crm", 10, {
      opacity: 0,
      scale: 0,
      ease: Elastic.easeOut.config(0.5, 0.4),
    })
    .to("#crm", 10, {
      scale: 0.9,
      ease: Elastic.easeOut.config(0.5, 0.4),
    })
    .to("#crm", 5, {
      x: "-500px",
    })
    .to("#crm", 10, {
      x: "-1000px",
    })
    .to("#crm", 1, {
      scale: 0,
      ease: Power4.easeOut,
    })
    .to("#ui-container", 3, {
      transform: "rotateY(-6deg)",
      ease: Elastic.easeOut.config(0.5, 0.4),
    });
});
