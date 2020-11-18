//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;
var dogImg,happyDogImg
var milkImg, feedTime, addFood,foodObj;
function preload()
{
dogImg = loadImage("dog.png")
happyDogImg = loadImage("happyDog.png")
  //load images here
  
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database()
  foodObj = new Food()
  foodStock = database.ref("foodStock")
  foodStock.on("value",readStock)
  dog = createSprite(250,300,150,150)
  dog.addImage(dogImg)
  dog.scale = 0.5;
  
function readStock(data){
  foods = data.val()
  foodObj.updateFoodStock(foods)

}}

function draw() {  
  background(46,139,87);
  if(keyWentUp(UP_ARROW)){
    writeFood(foods)
    dog.addImage("happyDogImg")
  }
 
  drawSprites();
  //add styles here

}
function writeFood(x){
  if(x<=0){
    x = 0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}
display(){
  var x=80, y=100;
  imageMode(CENTER)
   image(this.image,720,220,20,20)
   if(this.foodStock!=0){
     for(i=0;i<this.foodStock;i++)
     if(i%10===0){
       x=80;
       y=y+50
     }
     image(this.image,x,y,50,50)
     x=x+30;
   } 
}

