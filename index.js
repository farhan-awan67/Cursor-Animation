let body = document.querySelector("body");

body.addEventListener("mousemove", (dets) => {
  gsap.to("#cursor", {
    x: dets.x,
    y: dets.y,
    duration: 0.4,
  });
});
