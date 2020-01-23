var heighth = window.innerHeight;
//random degree for rotation
var randoDegree = (Math.floor(Math.random() * (360) + 1));
gsap.from(".drop", {
  duration: 4,
  y: -heighth,
  rotation: randoDegree,
  ease: "bounce"
});
