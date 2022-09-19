var player,edges
var gamestate
var cube,cubegroup

function preload(){ } 

function setup() { 
  createCanvas(1000,1000); 
  edges=createEdgeSprites();
  player=createSprite(500,900,50,50)
  gamestate="play"

  cubegroup=new Group()

} 

function draw() { 
  background("Black"); 
  
  if(gamestate==="play"){
    spawncubes();
    if(keyDown(RIGHT_ARROW)){
      player.x+=5;
      player.width+=0.5
      player.height+=0.5
    }
    if(keyDown(LEFT_ARROW)){
      player.x-=5;
      player.width-=0.5
      player.height-=0.5
    }
    
    player.bounceOff(edges)
    drawSprites(); 

    if(player.width===100 || player.width===5){
      gamestate="end"
    }
  }
  

  else if(gamestate==="end"){
    textSize(30)
    text("Game Over!",500,500)
  }
}


function spawncubes(){
  if(frameCount %30===0){
    var x=random(10,950)
    cube=createSprite(x,-10,10,10);
    cube.shapeColor='Red'
    cube.velocityY=8
  }
}