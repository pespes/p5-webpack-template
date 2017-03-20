const sketch = (p) => {

var canvas;

p.setup = function () {
  // We are still calling createCanvas like in the past, but now
  // we are storing the result as a variable. This way we can
  // call methods of the element, to set the position for instance.
  canvas = p.createCanvas(600, 400);

  // Here we call methods of each element to set the position
  // and id, try changing these values.
  // Use the inspector to look at the HTML generated from this
  // code when you load the sketch in your browser.
  canvas.position(300, 50);
  canvas.class("lemon");
}

p.draw = function () {
  // These commands are applied to the graphics canvas as normal.
  p.background(220, 180, 200);
  p.ellipse(p.width/2, p.height/2, 100, 100);
  p.ellipse(p.width/4, p.height/2, 50, 50);
}

}
new p5(sketch);
