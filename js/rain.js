var heighth = window.innerHeight * 0.9;
var width = window.innerWidth * 0.9;
var grid = [1, 15], //[rows, columns]
  tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 0.5
  });

  function animatePigs() {
    var randoDegree = Math.floor(Math.random() * 360 + 1);
  //one stagger call does all the animation:
  tl.to(".drop", {
      duration: 4,
      scale: 0.1,
      y: heighth,
      yoyo: true,
      repeat: 1,
      rotation: randoDegree,
      ease: "power2",
      stagger: {
        amount: 1.5,
        grid: grid,
        axis: "y",
        ease: "none",
        from: "edges"
      }
    }
  );
}

  // function animatePigs() {
  // var randoDegree = (Math.floor(Math.random() * (360) + 1));
  //   gsap.to(".drop", {
  //     duration: 4,
  //     y: heighth,
  //     rotation: randoDegree,
  //     ease: "power2"
  //    }
  //  );
  // }

  buildGrid({
    grid: grid,
    className: "drop",
    width: width,
    gutter: 100,
    parent: "#container"
  });

  animatePigs();



//helper function to build a grid of <div> elements
function buildGrid(vars) {
	vars = vars || {};
	var container = document.createElement("div"),
		rows = vars.grid[0] || 1,
		cols = vars.grid[1] || 5,
		width = vars.width || 100,
		gutter = vars.gutter || 1,
    className = vars.className || "",
		w = (width - cols * gutter) / cols,
    parent = (typeof(vars.parent) === "string") ? document.querySelector(vars.parent) : vars.parent ? vars.parent : document.body,
		css = "display: inline-block; margin: 0 " + (gutter / width * 100) + "% " + (gutter / width * 100) + "% 0; width: " + (w / width * 100) + "%;",
		l = rows * cols,
		i, box;
	for (i = 0; i < l; i++) {
		box = document.createElement("div");
    box.style.cssText = css;
    box.setAttribute("class", className);
    box.index = i;
    box.setAttribute("data-index", i);
	  container.appendChild(box);
	}
	container.style.cssText = "width:" + width + "px; line-height: 0; padding:" + gutter + "px 0 0 " + gutter + "px; display:inline-block;";
	parent.appendChild(box);
	return container;
}

gsap.set(".drop", {rotation: 0.5, force3D: true});
