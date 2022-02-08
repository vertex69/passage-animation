var entranceAnim = new gsap.timeline();
var shipCount = document.querySelector(".number");

var ship = {
  count: 0,
};

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
      from: "center",
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
      from: "center",
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
      from: "center",
      ease: Elastic.easeOut.config(0.5, 0.4),
      stagger: {
        each: 0.2,
      },
    },
    0.9
  );

shipCount.innerHTML = ship.count;
