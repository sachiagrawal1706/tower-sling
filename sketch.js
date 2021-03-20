const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var polygon_img;
function preload(){
    polygon_img=loadImage('polygon.png');
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height-20,1200,20);
platform1=new Ground (500,height-90,400,10)
//level1
//b1=new Block(300,200)
b2=new Block(350,200)
b3=new Block(400,200)
b4=new Block(450,200)
b5=new Block(500,200)
b6=new Block(550,200)
b7=new Block(600,200)
b8=new Block(650,200)

//level2
b9=new Block(400,150)
b10=new Block(450,150)
b11=new Block(500,150)
b12=new Block(550,150)
b13=new Block(600,150)
//level3
b14=new Block(450,100)
b15=new Block(500,100)
b16=new Block(550,100)
//level4
b17=new Block(500,50)
polygon=Bodies.circle(50,200,20);
World.add(world,polygon);

slingshot = new Slingshot(polygon,{x:100,y:200});

}
function draw(){
    background('grey')
    Engine.update(engine)
    platform1.display()
    ground.display()
    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
    slingshot.display();


   // b1.display()
   fill('purple')
    b2.display()
b3.display()
b4.display()
b5.display()
b6.display()
b7.display()
b8.display()
fill('pink')
b9.display()
b10.display()
b11.display()
b12.display()
b13.display()
fill('lightgreen')
b14.display()
b15.display()
b16.display()
fill('lightblue')
b17.display()

}
function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});

}
function mouseReleased(){
    slingshot.fly();
}