var heighth = window.innerHeight * .9;
var width = window.innerWidth * .9;
var grid = [1, 15], //[rows, columns]
  tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 0.5
  });

  buildGrid({
    grid: grid,
    className: "drop",
    width: width,
    gutter: 15
  });

  function animatePigs() {
  var randoDegree = (Math.floor(Math.random() * (360) + 1));
    gsap.to(".drop", {
      duration: 4,
      y: heighth,
      rotation: randoDegree,
      ease: "power2"
     }
   );
  };

//helper function to build a grid of <div> elements
function buildGrid(vars) {
	vars = vars || {};
  var container = document.createElement("div");
	var box = document.createElement("div"),
		rows = vars.grid[0] || 1,
		cols = vars.grid[1] || 5,
		width = vars.width || 100,
		gutter = vars.gutter || 1,
    className = vars.className || "",
		w = (width - cols * gutter) / cols,
		css = "display: inline-block; margin: 0 " + (gutter / width * 100) + "% " + (gutter / width * 100) + "% 0; width: " + (w / width * 100) + "%;",
		l = rows * cols,
		i, box;
	for (i = 0; i < l; i++) {
		pig = document.createElement("div");
		pig.style.cssText = css;
    pig.setAttribute("class", className);
    pig.index = i;
    pig.setAttribute("data-index", i);
		box.appendChild(pig);
	}
	box.style.cssText = "width:" + width + "px; line-height: 0; padding:" + gutter + "px 0 0 " + gutter + "px; display:inline-block;";
	container.appendChild(box);
	return container;
}

gsap.set(".drop", {rotation: 0.5, force3D: true});
animatePigs();
