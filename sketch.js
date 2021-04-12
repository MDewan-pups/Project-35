var  dog, happyDog,DogImg, database, foodS, foodStock;

function preload(){
  DogImg=loadImage("images/dogImg.png");
  happyDog=loadAnimation("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  
  dog= createSprite(250,300,10,10);
  dog.addImage("object", DogImg);
  dog.scale=0.2;
  dog.addAnimation("doggie", happyDog)

  foodStock=database.ref("Food");
  foodStock.on("value", readStock);

}


function draw() {  
background("green");

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.changeAnimation("doggie", happyDog)
}
  
  dog.display();
  drawSprites();

  textSize(24);
  fill("white");
  text("Note: Press Up arrow to feed the doggie!!", 50, 50);
  

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



