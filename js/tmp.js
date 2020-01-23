var container = document.querySelector("#container");
var minX = 0;
var maxX = container.width;
var y = container.height * 0.9;
var minSize = 20;
var maxSize = 50;
var minOpacity = 0.4;
var maxOpacity = 0.8;
var minDelay = 0;
var maxDelay = 2;
var minDuration = 2;
var maxDuration = 4;

var numPigs = 25;

for(var i = 0; i < numPigs; i++) {
  var pig = document.createElement("div");
  pig.setAttribute("class", "pig");
  container.appendChild(pig);
  animatePiggy(pig, true);
}

function animatePiggy(pig, firstRun) {

  var randoDegree = random(0, 360);
  var x = random(minX, maxX);
  var size = random(minSize, maxSize);
  var opacity = random(minOpacity, maxOpacity);
  var delay = random(minDelay, maxDelay);
  var duration = random(minDuration, maxDuration);

  gsap.set(pig, {
    x: x,
    y: 0,
    width: size,
    height: size,
    autoAlpha: opacity
});

  gsap.to(pig, duration, {
    autoAlpha: 0,
    duration: duration,
    y: y,
    delay: delay,
    rotation: randoDegree,
    onComplete: animatePiggy,
    onCompleteParams: [pig]
  });
}

function random(min, max) {
  if (max == null) { max = min; min = 0; }
  return Math.random() * (max - min) + min;
}


//helper function to build a grid of <div> elements
// function dropPiggy() {
//   var number = 25
//   parent = (document.querySelector("#container")),
//   i = 0,
//   box;
// 	while (i < number) {
//     //random number between 98 and 1
//     var randoHundo = (Math.floor(Math.random() * (98) + 1));
//     //random number between 5 and 2
//     var randoFiver = (Math.floor(Math.random() * (5) + 2));
//     i += randoFiver;
//     // var css = "left: 0 " + i + "%; bottom: 0 " + (randoFiver + randoFiver - 1 + 100) + "%;";
//     var css = "display: block; left: " + i + "%; bottom: " + (randoFiver + randoFiver - 1 + 100) + "%;";
//     var cssBack = "display: block; right: " + i + "%; bottom: " + (randoFiver + randoFiver - 1 + 100) + "%;";
// 		box = document.createElement("div");
//     box.setAttribute("class", "box");
//     box.style.cssText = css;
// 		parent.appendChild(box);
// 	}
// 	container.style.cssText = "width:" + width + "px; line-height: 0; padding:" + gutter + "px 0 0 " + gutter + "px; display:inline-block;";
// 	$('.container').append(drops);
// 	return parent;
// }

//this just helps avoid the pixel-snapping that some browsers do.
//gsap.set(".box", {rotation: 0.5, force3D: true});
