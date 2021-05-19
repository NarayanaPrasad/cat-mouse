var garden,gardenImg;
var cat,catImg,mouse,mouseImg;
var catMoving,mouseTeasing;
function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    catImg = loadImage("images/cat1.png");
    mouseImg = loadImage("images/mouse1.png");
    catMoving = loadAnimation("images/cat2.png","images/cat3.png");
    mouseTeasing = loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(200,200,10,10);
    garden.addImage(gardenImg);

    cat = createSprite(550,430,10,10);
    cat.addImage(catImg);
   
    cat.scale = 0.2

    mouse = createSprite(180,430,10,10);
    mouse.addImage(mouseImg);
    mouse.scale = 0.099;



}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
     keyPressed();
    drawSprites();
}


function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        mouse.addAnimation("teasingthecat",mouseTeasing);
        mouse.changeAnimation("teasingthecat");
        frameDelay = 25;

        cat.addAnimation("movingcat",catMoving);
        cat.changeAnimation("movingcat");

    }
  //For moving and changing animation write code here


}
