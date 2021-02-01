var canvas;
var music;

var surface1

var surface2

var surface3

var surface4

var box

var edges

function preload(){
    music = loadSound("music.mp3");

    
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    box = createSprite(random(20,750),50,35,35)
    box.velocityY = 5;
    box.velocityX = 5;

    box.shapeColor = ("white")

    surface1 = createSprite(100,590,180,20)
    surface1.shapeColor = ("red")

    surface2 = createSprite(290,590,180,20)
    surface2.shapeColor = ("orange")

    surface3 = createSprite(480,590,180,20)
    surface3.shapeColor = ("blue")

    surface4 = createSprite(680,590,180,20)
    surface4.shapeColor = ("green")

    //create box sprite and give velocity

    

    drawSprites();

    

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    edges = createEdgeSprites()
    


    box.bounceOff(edges)


    
    
    //add condition to check if box touching surface and make it box

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = ("red")
    
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = ("orange")
    
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = ("blue")
    
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = ("green")
    
    }

    

    drawSprites();
    


    //hasCollided();
    
}


function hasCollided() {


    


}
