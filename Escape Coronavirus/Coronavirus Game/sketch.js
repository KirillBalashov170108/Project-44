var doctor, vaccine, facemask, coronavirus, coronavirus2, coronavirus3, coronavirus4, coronavirus5;
var canvas;
var coronavirusGroup, facemaskGroup, vaccineGroup, coronavirus2Group, coronavirus3Group, coronavirus4Group, coronavirus5Group;
var score =0;
var backBoard

var life =3;
var score=0;
var gameState=1

function preload(){
  backgroundImg = loadImage("background.jpeg")
  
  doctorImg = loadImage("doctor.png")
  
  vaccineImg = loadImage("vaccine.png")

  backBoardImg = loadImage("back.jpg")
  
  coronavirusImg = loadImage("coronavirus.png")
  coronavirus2Img = loadImage("coronavirus2.png")
  coronavirus3Img = loadImage("coronavirus3.png")
  coronavirus4Img = loadImage("coronavirus4.png")
  coronavirus5Img = loadImage("coronavirus5.png")
  
  facemaskImg = loadImage("facemask.png")
}

function setup(){
  createCanvas(800,820);
  
  backBoard= createSprite(15, width/3, 100, height);
  backBoard.addImage(backBoardImg)
  backBoard.scale=0.7

  doctor = createSprite(150, width/2, 100,height);
  doctor.addImage(doctorImg)
  doctor.scale=0.17

  vaccineGroup = createGroup();
  coronavirusGroup = createGroup();
  coronavirus2Group = createGroup();
  coronavirus3Group = createGroup();
  coronavirus4Group = createGroup();
  coronavirus5Group = createGroup();
  facemaskGroup = createGroup();

  heading= createElement("h1");
  scoreboard= createElement("h1")
}

function draw(){
  background(backgroundImg);

  heading.html("Life: "+life)
  heading.style('color:red');
  heading.position(170,20)

  scoreboard.html("Score: "+score)
  scoreboard.style('color:red');
  scoreboard.position(width-200,20)

  if(gameState===1){
    doctor.y=mouseY  

    if(frameCount % 80 === 0){
      drawcoronavirus();
    }
  
    if(frameCount % 100 === 0){
      drawcoronavirus2();
    }
  
    if(frameCount % 120 === 0){
      drawcoronavirus3();
    }
    
    if(frameCount % 140 === 0){
      drawcoronavirus4();
    }
    
    if(frameCount % 160 === 0){
      drawcoronavirus5();
    }
  
    if(keyDown("space")){
      shootVaccine();
    }
   
    if (coronavirusGroup.collide(backBoard)){
      handleGameover(coronavirusGroup);
    }

    if (coronavirus2Group.collide(backBoard)){
      handleGameover(coronavirus2Group);
    }

    if (coronavirus3Group.collide(backBoard)){
      handleGameover(coronavirus3Group);
    }

    if (coronavirus4Group.collide(backBoard)){
      handleGameover(coronavirus4Group);
    }

    if (coronavirus5Group.collide(backBoard)){
      handleGameover(coronavirus5Group);
    }

    
    if (coronavirusGroup.collide(vaccineGroup)){
      handlecoronavirusCollision(coronavirusGroup)
    }

    if (coronavirus2Group.collide(vaccineGroup)){
      handlecoronavirusCollision(coronavirus2Group)
    }

    if (coronavirus3Group.collide(vaccineGroup)){
      handlecoronavirusCollision(coronavirus3Group)
    }

    if (coronavirus4Group.collide(vaccineGroup)){
      handlecoronavirusCollision(coronavirus4Group)
    }

    if (coronavirus5Group.collide(vaccineGroup)){
      handlecoronavirusCollision(coronavirus5Group)
    }
    
    drawSprites();
}

}

function drawcoronavirus(){
  coronavirus = createSprite(800,random(20,780),40,40);
  coronavirus.addImage(coronavirusImg);
  coronavirus.scale = 0.15;
  coronavirus.velocityX = -4;
  coronavirus.lifetime = 1000;
  coronavirus.debug = true
  coronavirus.setCollider("rectangle",20,-10,50,50)
  coronavirusGroup.add(coronavirus);
}
function drawcoronavirus2(){
  coronavirus2 = createSprite(800,random(20,780),40,40);
  coronavirus2.addImage(coronavirus2Img);
  coronavirus2.scale = 0.15;
  coronavirus2.velocityX = -4;
  coronavirus2.lifetime = 1000;
  //coronavirus2.debug = true
  coronavirus2Group.add(coronavirus2);
}
function drawcoronavirus3(){
  coronavirus3 = createSprite(800,random(20,780),40,40);
  coronavirus3.addImage(coronavirus3Img);
  coronavirus3.scale = 0.15;
  coronavirus3.velocityX = -4;
  coronavirus3.lifetime = 1000;
  //coronavirus3.debug = true
  coronavirus3Group.add(coronavirus3);
}
function drawcoronavirus4(){
  coronavirus4 = createSprite(800,random(20,780),40,40);
  coronavirus4.addImage(coronavirus4Img);
  coronavirus4.scale = 0.15;
  coronavirus4.velocityX = -4;
  coronavirus4.lifetime = 1000;
  //coronavirus4.debug = true
  coronavirus4Group.add(coronavirus4);
}
function drawcoronavirus5(){
  coronavirus5 = createSprite(800,random(20,780),40,40);
  coronavirus5.addImage(coronavirus5Img);
  coronavirus5.scale = 0.15;
  coronavirus5.velocityX = -4;
  coronavirus5.lifetime = 1000;
  //coronavirus5.debug = true
  coronavirus5Group.add(coronavirus5);
}
function shootVaccine(){
  vaccine= createSprite(150, width/2, 50,20)
  vaccine.y= doctor.y-20
  vaccine.addImage(vaccineImg)
  vaccine.scale=0.08
  vaccine.velocityX= 7
  vaccineGroup.add(vaccine)
}
function handlecoronavirusCollision(coronavirusGroup){
  if (life > 0) {
    score=score+1
  }
}
function handlecoronavirusCollision(coronavirus2Group){
  if (life > 0) {
    score=score+1
  }
}
function handlecoronavirusCollision(coronavirus3Group){
  if (life > 0) {
    score=score+1
  }
}
function handlecoronavirusCollision(coronavirus4Group){
  if (life > 0) {
    score=score+1
  }
}
function handlecoronavirusCollision(coronavirus5Group){
  if (life > 0) {
    score=score+1
  }
}
function handleGameover(coronavirusGroup){
  life=life-1
  coronavirusGroup.destroyEach();

  if (life === 0){
    gameState=2

    swal({
      title: `Game Over`,
      text: "Oops you lost the game....!!!",
      text: "Your Score is " + score,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Thanks For Playing"
    });
  }
}
function handleGameover(coronavirusGroup){
  life=life-1
  coronavirusGroup.destroyEach();

  if (life === 0){
    gameState=2

    swal({
      title: `Game Over`,
      text: "Oops you lost the game....!!!",
      text: "Your Score is " + score,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Thanks For Playing"
    });
  }
}
function handleGameover(coronavirus2Group){
  life=life-1
  coronavirus2Group.destroyEach();

  if (life === 0){
    gameState=2

    swal({
      title: `Game Over`,
      text: "Oops you lost the game....!!!",
      text: "Your Score is " + score,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Thanks For Playing"
    });
  }
}
function handleGameover(coronavirus3Group){
  life=life-1
  coronavirus3Group.destroyEach();

  if (life === 0){
    gameState=2

    swal({
      title: `Game Over`,
      text: "Oops you lost the game....!!!",
      text: "Your Score is " + score,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Thanks For Playing"
    });
  }
}
function handleGameover(coronavirus4Group){
  life=life-1
  coronavirus4Group.destroyEach();

  if (life === 0){
    gameState=2

    swal({
      title: `Game Over`,
      text: "Oops you lost the game....!!!",
      text: "Your Score is " + score,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Thanks For Playing"
    });
  }
}
function handleGameover(coronavirus5Group){
  life=life-1
  coronavirus5Group.destroyEach();

  if (life === 0){
    gameState=2

    swal({
      title: `Game Over`,
      text: "Oops you lost the game....!!!",
      text: "Your Score is " + score,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Thanks For Playing"
    });
  }
}