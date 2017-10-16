var frase;

function setup() 
{
  createCanvas (windowWidth, windowHeight);

frase =  " Olá Mundo!!!!!" ;

}


function draw() 
{
  background(255);
  

  textAlign(CENTER, CENTER);
  textSize(50);
  textFont("Shrikhand");
  textLeading(100);
  text(frase, width/2, height/2, 50); 


}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
