// Ruben Matos
// Nº 3150547
// 2017/2017 
// 1º Semestre 
// Laboratório de Projecto I 
// Design Gráfico e Multimédia 
// ESAD.CR
// Marco Heleno 
// 08/01/2018 


//Array.
var anos = [];
//Variável.
var dados, factor;


//Função que faz load do ficheiro de excel antes do programa arrancar.
function preload() 
{
  dados = loadTable ("assets/dados.csv", "csv", "header");
}


//Função que cria as condições para a função draw funcionar.
function setup() 
{
   //"createCanvas" syntax que cria o espaço para que o desenho aconteça (Neste caso, toda a largura e altura do ecrã).
  createCanvas(windowWidth, windowHeight);
  background(0,0,0);

    factor = 5;
  //print(dados.getRowCount());
  //print(dados.getColumnCount());
  //print(dados.getColumn("homens"));

 //Para a variável linha=0 quando o valor de linha é menor que o rowcount acrescenta mais 1 valor.
  for (var linha=0; linha<dados.getRowCount(); linha++) 
  {
    for (var coluna=0; coluna<dados.getColumnCount(); coluna++) 
    {
       //Para os dois "for" anteriormente referidos.
        //A variável "x" contem a largura do ecrã a dividir por o rowcount vezes o valor de "linha".
      var x = ((width/dados.getRowCount()) * linha) +100;
      //A variável "y" contem metade da altura do ecrã.
      var y = height/2 ;
       //A variável "y" contem metade da altura do ecrã.//A variável "y" contem metade da altura do ecrã.
      var percurso = dados.getString(linha, 0);
       //A variável amplitude irá retirar um valor do valor de linha na coluna 1.
      var km = dados.getNum(linha, 1);
       //A variável tempo irá retirar um valor do valor de linha na coluna 2.
      var duração = dados.getNum(linha,2);
     

      //Array "anos" consoante o valor de linha irá guardar no array "Frequencia" o valor atual das seguites variáveis.
      anos [linha] = new Ano (x, y, percurso, km, duração, factor);
      //print(percurso+" - "+km+" - "+duração);
    }
  }
}

//Função que irá desenhar no canvas.
function draw() 
{
  
  for (var i=0; i<dados.getRowCount(); i++)
  {
    anos[i].desenha();
  }
 //Não repetir o draw.
noLoop();
}

class Ano 
{

  /*
     * A classe constructor representa o objecto responsavel pelas barras no ecrã
     */
  constructor (x_, y_, percurso_, km_, duração_, factor_)
  {
    this.x = x_;
    this.y = y_;
    this.percurso = percurso_;
    this.km = km_;
    this.duração = duração_;
    this.factor = factor_;
    
  }

  //funcao que desenha o objecto frequencia no ecra
    desenha ()

    {

     //print(this.percurso+" - "+this.km+" - "+this.duração);


       // desenha os km
     fill(16, 61, 164, 80);
     stroke(0);
     ellipse(this.x, this.y, this.km/this.factor);
     fill(0);



      // desenha a duração do percurso 
      fill( 210, 77, 24);
      stroke(0);
      ellipse(this.x, this.y, this.duração);
      fill(0);

    

      // desenha a duração do percurso
      textSize(20);
      noStroke();
      fill(255,255,255);
      textAlign(CENTER,CENTER);
      text(this.duração, this.x, 600);

    
    // desenha numero de km 
     textSize(20);
     noStroke();
     fill(255,255,255);
     textAlign(CENTER,CENTER);
     text(this.km, this.x, 400);

     

        // escreve o numero do percurso
        fill(0);
        textSize(20);
        noStroke();
        textAlign(CENTER,CENTER);
        text(this.percurso, this.x, this.y);

     
    }
}

function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}

