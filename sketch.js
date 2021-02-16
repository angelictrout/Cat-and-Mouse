var ground, groundImg;

var mouse, mouseRunning;

var cat, catRunning;

function preload() {
    //load the images here

    groundImg = loadImage("garden.png");

    mouse1 = loadAnimation("mouse1.png");

    mouse4 = loadAnimation("mouse4.png");

    mouseRunning = loadAnimation("mouse2.png", "mouse3.png");

    cat1 = loadAnimation("cat1.png");

    cat4 = loadAnimation("cat4.png");

    catRunning = loadAnimation("cat2.png", "cat3.png");

}

function setup(){
    createCanvas(680,400);
    
    ground = createSprite(340, 200);
    ground.addImage("groundImg", groundImg);
    ground.scale = 0.7;

    cat = createSprite(500, 340, 20, 100);
    cat.addAnimation("cat1", cat1);
    cat.scale = 0.1;

    mouse = createSprite(200, 340, 10, 40);
    mouse.addAnimation("mouse1", mouse1);
    mouse.scale = 0.1;

}

function draw() {

    background(rgb(30, 100, 220));

if (cat.x - mouse.x < cat.width / 2 - mouse.width / 2) {
       cat.velocityX = 0;
       cat.addAnimation("cat4", cat4);
       cat.changeAnimation("cat4");
       cat.x = 300;

       mouse.addAnimation("mouse4", mouse4);
       mouse.changeAnimation("mouse4");
       cat.bounce(mouse);
    }

    drawSprites();
}

function keyPressed() {
    
    if (keyCode === LEFT_ARROW) {

        cat.velocityX = -5;
        cat.addAnimation("catRunning", catRunning);
        cat.changeAnimation("catRunning");

        mouse.addAnimation("mouseRunning", mouseRunning);
        mouse.changeAnimation("mouseRunning");
    }
    
}
