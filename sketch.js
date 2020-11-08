var f1, f1Image, fruit1Group;
var f2, f2Image, fruit2Group;
var f3, f3Image, fruit3Group;
var f4, f4Image, fruit4Group;


var alien1, alien1Image, alien1Group;
var alien2, alien2Image, alien2Group;

var weapon, weaponImage;

var bg, bgImage;

var cutSound, overSound;

var gameState = "play";

var count = 0;
var money = 0;

function preload() {
  f1Image = loadImage("fruit1.png");
  f2Image = loadImage("fruit2.png");
  f3Image = loadImage("fruit3.png");
  f4Image = loadImage("fruit4.png");

  alien1Image = loadImage("alien1.png");
  alien2Image = loadImage("alien2.png");

  weaponImage = loadImage("w1.png");

  overImage = loadImage("over2.png")

  bgImage = loadImage("bg.jpg");

  cutSound = loadSound("cut.mp3");
  overSound = loadSound("over.mp3");
}

function setup() {
  createCanvas(600, 470);

  bg = createSprite(320, 275, 650, 500);
  bg.addImage("bg", bgImage);
  bg.scale = 0.9;

  weapon = createSprite(200, 200, 20, 20);
  weapon.addImage("sword", weaponImage);
  weapon.scale = 0.2;
  weapon.visible = true;
  weapon.setCollider("circle", +10, +30, 140)
  weapon.debug = false;

  fruit1Group = new Group();
  fruit2Group = new Group();
  fruit3Group = new Group();
  fruit4Group = new Group();

  alien1Group = new Group();
  alien2Group = new Group();
}

function draw() {
  background(250);
  drawSprites();

  fill("yellow");
  textSize(20);
  text("Score:" + count, 450, 40);

  fill("orange");
  textSize(20);
  text("Money=" + money, 450, 60);

  if (gameState === "play") {

    weapon.addImage("sword", weaponImage);
    weapon.scale = 0.2;

    //customize function for fruits
    fruit1();
    fruit2();
    fruit3();
    fruit4();

    enemy1();
    enemy2();

    if (weapon.isTouching(fruit1Group)) {
      fruit1Group.destroyEach();
      cutSound.play();
      count = count + 2;
      money = money + 5;
    }

    if (weapon.isTouching(fruit2Group)) {
      fruit2Group.destroyEach();
      cutSound.play();
      count = count + 3
      money = money + 5;
    }

    if (weapon.isTouching(fruit3Group)) {
      fruit3Group.destroyEach();
      cutSound.play();
      count = count + 10;
      money = money + 20;
    }

    if (weapon.isTouching(fruit4Group)) {
      fruit4Group.destroyEach();
      cutSound.play();
      count = count + 7;
      money = money + 10
    }

    weapon.x = World.mouseX;
    weapon.y = World.mouseY;

    if (weapon.isTouching(alien1Group) || weapon.isTouching(alien2Group)) {
      gameState = "over";

      background("white")

      //changing image
      weapon.addImage("sword", overImage)
      weapon.x = 290;
      weapon.y = 240;
      weapon.scale = 1;

      overSound.play();

      fruit1Group.setVelocityXEach(0);
      fruit2Group.setVelocityYEach(0);
      fruit3Group.setVelocityYEach(0);
      fruit4Group.setVelocityXEach(0);

      alien1Group.setVelocityYEach(0);
      alien1Group.setVelocityXEach(0);
      alien2Group.setVelocityYEach(0);
      alien2Group.setVelocityXEach(0);
    }
  }

  if (keyDown("space")) {
    gameState = "play";
  }
}

function fruit1() {
  if (frameCount % 80 === 0) {
    var s = Math.round(random(1, 2))
    switch (s) {
      case 1:
        f1 = createSprite(0, 470, 20, 20)
        f1.addImage("f1", f1Image);
        f1.velocityX = (12 + (count / 4));
        f1.y = Math.round(random(20, 130));
        break;
      case 2:
        f1 = createSprite(0, 470, 20, 20)
        f1.addImage("f1", f1Image);
        f1.velocityY = -(12 + (count / 4));
        f1.x = Math.round(random(20, 130));
        break;
      default:
        break;
    }

    fruit1Group.add(f1);
    f1.scale = 0.3;
    f1.lifetime = 100;
  }
}

function fruit2() {
  if (frameCount % 100 === 0) {
    var s = Math.round(random(1, 2))
    switch (s) {
      case 1:
        f2 = createSprite(0, 470, 20, 20)
        f2.addImage("f2", f2Image);
        f2.velocityX = (12 + (count / 4));
        f2.y = Math.round(random(150, 300));
        break;
      case 2:
        f2 = createSprite(0, 470, 20, 20)
        f2.addImage("f2", f2Image);
        f2.velocityY = -(12 + (count / 4));
        f2.x = Math.round(random(150, 300));
        break;
      default:
        break;
    }

    fruit2Group.add(f2);
    f2.scale = 0.3;
    f2.lifetime = 50;
  }
}

function fruit3() {
  if (frameCount % 170 === 0) {
    var s = Math.round(random(1, 2))
    switch (s) {
      case 1:
        f3 = createSprite(0, 470, 20, 20)
        f3.addImage("f3", f3Image);
        f3.velocityX = (12 + (count / 4));
        f3.y = Math.round(random(320, 450));
        break;
      case 2:
        f3 = createSprite(0, 470, 20, 20)
        f3.addImage("f3", f3Image);
        f3.velocityY = -(12 + (count / 4));
        f3.x = Math.round(random(320, 450));
        break;
      default:
        break;
    }

    fruit3Group.add(f3);
    f3.scale = 0.2;
    f3.lifetime = 70;
  }
}

function fruit4() {
  if (frameCount % 250 === 0) {
    var s = Math.round(random(1, 2))
    switch (s) {
      case 1:
        f4 = createSprite(0, 470, 20, 20)
        f4.addImage("f4", f4Image);
        f4.velocityX = (12 + (count / 4));
        f4.y = Math.round(random(400, 550));
        break;
      case 2:
        f4 = createSprite(0, 470, 20, 20)
        f4.addImage("f4", f4Image);
        f4.velocityY = -(12 + (count / 4));
        f4.x = Math.round(random(400, 550));
        break;
      default:
        break;
    }

    fruit4Group.add(f4);
    f4.scale = 0.2;
    f4.lifetime = 50;
  }
}



function enemy1() {
  if (frameCount % 100 === 0) {
    var s = Math.round(random(1, 2))
    switch (s) {
      case 1:
        alien1 = createSprite(0, 470, 20, 20)
        alien1.addImage("a1", alien1Image);
        alien1.velocityX = (12 + (count / 4));
        alien1.y = Math.round(random(100, 200));
        break;
      case 2:
        alien1 = createSprite(0, 470, 20, 20)
        alien1.addImage("a2", alien1Image);
        alien1.velocityY = -(12 + (count / 4));
        alien1.x = Math.round(random(100, 200));
        break;
      default:
        break;
    }

    alien1Group.add(alien1);
    alien1.scale = 0.8;
    alien1.lifetime = 100;
  }
}

function enemy2() {
  if (frameCount % 200 === 0) {
    var s = Math.round(random(1, 2))
    switch (s) {
      case 1:
        alien2 = createSprite(0, 470, 20, 20)
        alien2.addImage("a2", alien2Image);
        alien2.velocityX = (12 + (count / 4));
        alien2.y = Math.round(random(230, 400));
        break;
      case 2:
        alien2 = createSprite(0, 470, 20, 20)
        alien2.addImage("a2", alien2Image);
        alien2.velocityY = -(12 + (count / 4));
        alien2.x = Math.round(random(230, 400));
        break;
      default:
        break;
    }

    alien2Group.add(alien2);
    alien2.scale = 0.8;
    alien2.lifetime = 100;
  }
}