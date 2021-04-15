const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup()
{
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    box = new Box(1000,200,50,50);
    box1 = new Box(1000,250,50,50);
    box2 = new Box(1000,300,50,50);
    box3 = new Box(1000,350,50,50); 
    box4 = new Box(1000,400,50,50); 
    box5 = new Box(1000,450,50,50); 
    box6 = new Box(1000,150,50,50); 
    box7 = new Box(1000,200,50,50); 

    box8 = new Box(800,200,50,50);
    box9 = new Box(800,250,50,50);
    box10 = new Box(800,300,50,50);
    box11 = new Box(800,350,50,50); 
    box12 = new Box(800,400,50,50); 
    box13 = new Box(800,450,50,50); 
    box14 = new Box(800,150,50,50); 
    box15 = new Box(800,200,50,50); 

    ball = new Ball(500,200,100,100);

    sling = new SlingShot(ball.body,{x:500, y:100})

}

function draw()
{
 background("white");
    
    Engine.update(engine);
   
    ground.display();

    box.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();


    ball.display();

    sling.display();
}

function mouseDragged()
{
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
