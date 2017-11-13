var yoff = 0.0;        // 2nd dimension of perlin noise
var img;


function setup() 
{
  createCanvas(596, 842, SVG);
  frameRate(1);
  img = loadImage("lateral2.png");  // Carregar a imagem 
}

function draw() {

  background(255);
  noFill();
  stroke(0);
  //rect (width/2, height/2, 500, 750, 20);
  //rectMode (CENTER);

  //criar linhas em movimento
  for (var y=0; y<height+10; y+=10) 
  {
    beginShape();
    var xoff = 0;
    for (var x=0; x<width+10; x+=10) 
    { // Criar noise 
      var a = noise(xoff, yoff)+1;
      // defenir vertex
      vertex(x, y*a); 
      //  defenir X 
      xoff += 0.05;
    } // defenir Y 
    yoff += 0.03;
    endShape();
  }
  // localização da imagem
  image(img, 0, 0);
  lateral2.resize(500, 750);
  image(lateral2, 0, 0)

  // Introdução de texto 
  textAlign(CENTER);
  textStyle('roboto');
  textSize(80);
  text("3 & 4 de Junho");
  fill(0, 102, 153);
  
  // SVG para prints
  function keyPressed()
  {
    if (key === " ")
    {
      noLoop();
      save("meuProjecto.svg");
    }
  }
}
