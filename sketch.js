//My Bunnies

let Bunnies = [{
  name:"Spaghetti",
  color:"tomato"
},{
  name:"Chocolate",
  color:"cookies"
},{
  name:"Pizza",
  color:"sausage"
},{
  name:"Marshmallow",
  color:"snow"
},{
  name:"Tiramisu",
  color:"coca"
},{
  name:"Bread",
  color:"sesame"
},];

let randomIndex;
let animating = false;
let cutedogs = [];
let imageCounter= 0;


function preload(){
for (let i = 0; i<= 12; i++) {
 //cutedogs[i]= loadImage("resize/cutdog_"+ i +".jpg")
 cutedogs[i]= loadImage(`resize/cutedog_${i}.JPG`)
}
} 

function setup() {
    createCanvas(400, 400);
    background(255, 255, 183);
    textSize(32);
    ImageMode(CENTER);
    frameRate(8); 
    
    text("click to see the cutest dog",50,50);
    console.log(cutedogs);
  }
  

  function draw() {

    if(animating == true){
      clear();
      image(cutedogs[imageCounter],width/2,height/2);
      if (imageCounter  < cutedogs.length - 1)
      {imageCounter++; console.log(imageCounter)
    }  else{imageCounter=0 }

  }
  }

  
function changeBackground(){
  if (counter<= 6){
    counter++;
    console.log(counter)
  background(random(255),random(255),random(255));
  setTimeout(changeBackground,1000);
}else{
}
}

function randomizer(){
  animating = false;

 if (Bunnies [0]){
 //background(random(200,255));
 randomIndex= int(random(Bunnies.Length));
 text(Bunnies[randomIndex].color,width/2,height-25);
 image(random(cutedogs),width/2,height/2);
 Bunnies.splice(randomIndex,1);
 } else {
 background(random(200,255));
 text("nothing left!",50,50);
 }
}
 
function mousePressed(){
 animating = true;
 setTimeout(randomizdr,2000);

}
 