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


function preload(){
for (let i = 0; i<= 12; i++) {
 cutedogs[i]= loadImage("resize/cutdog_"+ i +".jpg")

}
} 

function setup() {
    createCanvas(400, 400);
    background(255, 255, 183);
    textSize(32);
    text("click to see the cutest dog",50,50);
    console.log(cutedogs);
  }
  

  function draw() {

    if(animating == true){
      Image(cutedogs[0],0,0);
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
 background(random(200,255));
 randomIndex= int(random(Bunnies.Length));
          //console.log(Bunnies.Length);
          //console.log(Bunnies[int(random(Bunnies.length))].name);
          //console.log(Bunnies[randomIndex].name);

 text(Bunnies[randomIndex].name + "'s favorite color is" + Bunnies[randomIndex].color,50,50);
 Bunnies.splice(randomIndex,1);
 } else {
 background(random(200,255));
 text("nothing left!",50,50);
 }
}
 
function mousePressed(){
 animating = true;
 setTimeout(randomizdr,2000);
console.log("beep")
}
