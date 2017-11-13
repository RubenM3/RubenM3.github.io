var yoff = 0.0;        // 2nd dimension of perlin noise
var img;


function setup() 
{
  createCanvas(596, 842, SVG);
  frameRate(1);
  img = loadImage("lateral2.png");
}

function draw() {

  background(255);
  noFill();
  stroke(0);
  //rect (width/2, height/2, 500, 750, 20);
  //rectMode (CENTER);

  for (var y=0; y<height+10; y+=10) 
  {
    beginShape();
    var xoff = 0;
    for (var x=0; x<width+10; x+=10) 
    {
      var a = noise(xoff, yoff)+1;

      vertex(x, y*a); 
      xoff += 0.05;
    }
    yoff += 0.03;
    endShape();
  }
  
  image(img, 0, 0);


  textAlign(CENTER);
  text("3 & 4 de Junho", 10, 40);
  fill(0, 102, 153);

  function keyPressed()
  {
    if (key === " ")
    {
      noLoop();
      save("meuProjecto.svg");
    }
  }
}
