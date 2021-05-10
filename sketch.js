var dog;
var dog_img;
var happyDog_img;
var database;
var foodS;
var foodStock;

function preload()
{
dog_img = loadImage("images/Dog.png");
happyDog_img = loadImage("images/happydog.png");
}

function setup() {

	createCanvas(500, 500);
  
  dog = createSprite(250,250,20,50);
  dog.addImage(dog_img);
  dog.scale = 0.25;

  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog_img);
  }
  drawSprites();
 
  //add styles here
  fill("white");
text("remaining food:"+foodS,5,50);
}

function readStock(data){ 
  foodS=data.val(); }

 function writeStock(x){
     if(x<=0){
      x=0; }
      
      else{ x=x-1; }
      database.ref('/').update({ food:x }) }
