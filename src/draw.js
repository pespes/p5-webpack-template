
const sketch = (p) => {
  let gray = 200

  p.setup = function () {
    p.createCanvas(800, 800)
  }

  p.draw = function () {
    p.background(gray)
    p.rect(p.width/2 - 25, p.height/2 - 25, 50, 50)
  }

  p.mousePressed = function () {
    gray = (gray + 16) % 256
  }
}

new p5(sketch);
