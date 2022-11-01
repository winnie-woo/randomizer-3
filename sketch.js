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
let button;


function preload(){
for (let i = 0; i<= 11; i++) {
 cutedogs[i]= loadImage('resize/cutedog_'+i+'.jpg')
}
} 

function setup() {
    createCanvas(600, 600);
    background(255, 240, 179);
    textSize(36);
    textFont('courier new');
    textAlign(CENTER);
    textStyle(BOLD);
    fill(255);
    imageMode(CENTER);
    frameRate(8); 
    
    text("click to randomizer",width/2,height/2);
    console.log(cutedogs);

    button = createButton("click to see your dog");
    button.mousePressed(buttonPressed)
  }
  

  function draw() {

    if(animating == true){
      clear();
      image(cutedogs[imageCounter],width/2,
      height/2);

      if (imageCounter  < cutedogs.length - 1){
        imageCounter++; 
        console.log(imageCounter);
    }  else{
      imageCounter=0; 
    }

  }
  }

  
function changeBackground(){
  if (counter<= 6){
    counter++;
    console.log(counter);
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
 text(Bunnies[randomIndex].name,width/2,height-25);
 image(random(cutedogs),width/2,height/2);
 Bunnies.splice(randomIndex,1);
 } else {
 background(random(200,255));
 text("nothing left!",50,50);
 }
}
 
function buttonPressed(){
 animating = true;
 setTimeout(randomizdr,2000);

}
 