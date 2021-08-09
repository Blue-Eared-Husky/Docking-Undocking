var iss, ship, hasDocked, dockPoint;
var backgroundImg, issImg, defaultShipImg, upShipImg, rightShipImg, leftShipImg;

function preload(){
  backgroundImg = loadImage("./assets/spacebg.jpg");
  issImg = loadImage("./assets/iss.png");
  defaultShipImg = loadImage("./assets/spacecraft1.png");
  upShipImg = loadImage("./assets/spacecraft2.png");
  rightShipImg = loadImage("./assets/spacecraft3.png");
  leftShipImg = loadImage("./assets/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400,175);
  iss.addImage(issImg);
  iss.scale = 0.7;

  ship = createSprite(100,300);
  ship.addImage("stationary",defaultShipImg);
  ship.addImage("up",upShipImg);
  ship.addImage("left",leftShipImg);
  ship.addImage("right",rightShipImg);
  ship.scale = 0.2;
  ship.changeImage("stationary");
  ship.setCollider("circle",0,-120,200);

  dockPoint = createSprite(356,193,40,50);
  dockPoint.visible = false;

  hasDocked = false;
  if (!hasDocked){
    ship.x = random(100,700);
  }
}

function draw() {
  background(backgroundImg);

  if(ship.collide(dockPoint)){
    hasDocked = true;
  }

  if(hasDocked){
    textSize(20);
    fill("white");
    text("Docking Successful!",width/2-100,height-50);
  }

  drawSprites();
}

function keyPressed(){
  if(keyCode === LEFT_ARROW && !hasDocked){
    ship.changeImage("left");
    ship.x -= 10;
  }
  if(keyCode === RIGHT_ARROW && !hasDocked){
    ship.changeImage("right");
    ship.x += 10;
  }
  if(keyCode === UP_ARROW && !hasDocked){
    ship.changeImage("up");
    ship.y -= 10;
  }
}