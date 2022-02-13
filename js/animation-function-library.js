function normalAnimation(
  target,
  progress,
  timeOffset,
  transformScale,
  offsetX,
  offsetY,
  easeP
) {
  entranceAnim.from(
    target,
    progress,
    {
      scale: transformScale,
      y: offsetY,
      x: offsetX,
      ease: easeP,
    },
    timeOffset
  );
}

function animationWithStagger(
  target,
  progress,
  timeOffset,
  transformScale,
  offsetX,
  offsetY,
  easeP,
  staggerVal
) {
  entranceAnim.from(
    target,
    progress,
    {
      scale: transformScale,
      y: offsetY,
      x: offsetX,
      ease: easeP,
      stagger: {
        each: staggerVal,
      },
    },
    timeOffset
  );
}
