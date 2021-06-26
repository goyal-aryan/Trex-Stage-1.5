
 var trex, trex_running, trex_collided;
 var ground, invisibleGround, groundImage;
 var ground2;

function preload() {
  
  // to load animation for trex
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  
  // to load image for trex
  trex_collided = loadImage("trex_collided.png");
  
 // to load image for ground
  groundImage = loadImage("ground2.png")
}

function setup() {
  // to create canvas
 createCanvas(600, 200);

 //create a trex sprite
 trex = createSprite(50,160,20,50);
 trex.addAnimation("running", trex_running);
 trex.scale = 0.5;
  

  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //to create ground2 sprite
  ground2 = createSprite (200,190,400,20);
  ground2.visible = false;
  
}

  function draw() {
    
    console.timeEnd();
    // to give background
    background("lightblue");
    
    console.info("start of function draw");
    console.error("error message");
    console.warn("a warning");
    
    //to fine trex cordinates
    //console.log(trex.y);
    

  //jump when the space button is pressed and value is greater than 150
  if (keyDown("space") &&  trex.y > 150) {
    trex.velocityY = -10;
  }

    //to make trex fall down due to gravity
  trex.velocityY = trex.velocityY + 0.8

    //to loop the ground 
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

    //to make trex run on the ground
  trex.collide(ground2);
    
    //to create all sprites
    drawSprites();
}