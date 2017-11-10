var yoff = 0.0;  
var img;

function preload() 
{
  img = loadImage("eva.png");
}

function setup()
{
  createCanvas(596, 842);
  frameRate(1);
}

function draw() 
{
  background(255);
  stroke(20);
  rect (width/2, height/2, 500, 750, 20);
  rectMode (CENTER);
  noFill();
  image(img, 0, 0);
  
    

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
  
}