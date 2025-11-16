var points = [];
var mult = -0.09;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  noiseDetail(24);

  var density = 65;
  var space = width / density;

  for (var x = 0; x < width; x += space) {
    for (var y = 0; y < height; y += space) {
      var p = createVector(x + random(-20,20), y + random(-20,20)); 
      points.push(p);
    }
  }
}

function draw() {
  noStroke();

  for (var i = 0; i < points.length; i++) {
    
    var r = map(points[i].x, 0 , width , 24,255)
    var g = map(points[i].y, 0 , height , 0, 0)
    var b = map(points[i].x, 0 , height , 128,255)
    var size = map(points[i].y, 0, height, 0, 0.7); // Size changes with y position
ellipse(points[i].x, points[i].y, size);

    
    fill(r,g,b)
    
    var angle = map( noise(points[i].x * mult, points[i].y * mult),0,1,0,720);

    points[i].add(createVector(cos(angle), sin(angle)));
    var cosineWave = cos(TWO_PI * (frameCount / 100 + points[i].x / width));
points[i].add(createVector(cos(angle), sin(angle) + sineWave + cosineWave));

    
      var sineWave = sin(HALF_PI * (frameCount / 50 + points[i].x / width)); 
    points[i].add(createVector(cos(angle), sin(angle) + sineWave)); 
   
    
  }
}
