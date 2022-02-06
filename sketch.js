var QWERTY
function setup() {
  createCanvas(500,500);
QWERTY = createSprite(100,50,100,50)
}

function draw() 
{
  background("purple");
if(keyIsDown(LEFT_ARROW)){
  QWERTY.position.x = QWERTY.position.x - 5
}
if(keyIsDown(RIGHT_ARROW)){
  QWERTY.position.x = QWERTY.position.x + 5
}
if(keyIsDown(UP_ARROW)){
  QWERTY.position.y = QWERTY.position.y - 5
}
if(keyIsDown(DOWN_ARROW)){
  QWERTY.position.y = QWERTY.position.y + 5
}
 drawSprites();
}




