var base;
var sections = [];
var para;

function preload() {
  base = loadImage("base.png");

}

function setup() {
  createCanvas(429, 571)
  sections.push(new Section("Honesty", 100, 237, 30));
  sections.push(new Section("Unknown", 180, 249, 35));
  sections.push(new Section("Unknown", 250, 145, 26));
  sections.push(new Section("Worship", 158, 189, 30));
  sections.push(new Section("Patriotisim", 240, 202, 40));
  sections.push(new Section("Charity", 178, 141, 20));

  para = createP("Mouse Over to see translation.")
}

function draw() {
  image(base, 0, 0)
  for (var i = 0; i < sections.length; i++) {
    if (sections[i].over())
      para.html(sections[i].title)
  }
  if (mouseX > 276)
    para.html("Unknown");
  // console.log(mouseX + "," + mouseY)
}

function Section(title, x, y, d) {
  this.title = title
  this.x = x
  this.y = y
  this.d = d;
  this.over = function() {
    if (dist(this.x, this.y, mouseX, mouseY) < this.d)
      return true;
    else
      return false;
  }
}