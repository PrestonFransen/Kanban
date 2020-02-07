var container = $(".container");
var numItems = 15;
var minX = 0;
var maxX = container.width();
var minY = 200;
var maxY = 600;
var minSize = 50;
var maxSize = 80;
var minDelay = 0;
var maxDelay = 2;
var minOpacity = 0.8;
var maxOpacity = 0.9;
var minDuration = 2;
var maxDuration = 4;
var minStart = 80;
var maxStart = 120;

for (var i = 0; i < numItems; i++) {
  var pig = $("<div class='pig'/>").appendTo(container);
  var coin = $("<div class='coin'/>").appendTo(container);
  animate(pig, true);
  animate(coin, true);
}

$(window).resize(onResize);

function animate(item, firstRun) {

  var x = random(minX, maxX);
  var y = random(minY, maxY);
  var size = random(minSize, maxSize);
  var delay = random(minDelay, maxDelay);
  var opacity = random(minOpacity, maxOpacity);
  var duration = random(minDuration, maxDuration);
  var degree = random(0, 360);
  var start = random(minStart, maxStart);

  TweenLite.set(item, {
    x: x,
    y: -start,
    width: size,
    height: size,
    autoAlpha: opacity
  });

  var tween = TweenLite.to(item, duration, {
    autoAlpha: 0,
    y: y,
    delay: delay,
    rotation: degree,
    onComplete: animate,
    onCompleteParams: [item]
  });

  if (firstRun) {
    tween.time(random(duration));
  }
}


  var tl = new TimelineMax({repeat:-1, repeatDelay: 2});
  $(".goal").each(function(index, element){
    tl.to(element, 4, {y:60, opacity:1})
      .to(element, 1.5, {x:600, opacity:0, ease:Power2.easeIn}, "+=1")
  })


function onResize() {
  maxX = container.width();
}

function random(min, max) {
  if (max == null) { max = min; min = 0; }
  return Math.random() * (max - min) + min;
}
