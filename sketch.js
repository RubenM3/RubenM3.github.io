// Ruben Matos 3150547  
// Daniel Costa 3150548
// Sofia Monteiro 3150424
// Jessica Machado 3150550
// Eva magia
// 2017/2018 
// 1º Semestre 
// Laboratório de Projecto 1 
// Design Gráfico e Multimédia 
// Escola Superior de Artes e Design das Caldas da Rainha 
// Professor - Marco Heleno 


var yoff = 0.0;        // 2nd dimension of perlin noise
var img;


function setup() 
{
  createCanvas(677, 960);
  frameRate(0,10);
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
      xoff += 0.10;
    } // defenir Y 
    yoff += 0.03;
    endShape();
  }

  // localização da imagem
  image(img, 0, 0);
 img.resize(677, 960);
 

  // Introdução de texto 
 // text("3 & 4 de Junho");
  //fill(0, 102, 153);
  //textAlign(CENTER);
  //textStyle('roboto');
  //textSize(80);
  
  
}
