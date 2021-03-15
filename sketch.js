const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var maxDrops=100;
var drops = [];

function preload(){
    
}

function setup(){
   var Canvas = createCanvas(600,600); 
   engine = Engine.create();
   world = engine.world;

   for(var i=0;i<maxDrops;i++){
      drops.push(new Drop(random(0,400),random(0,400)));
   }
}

function draw(){
   background("black");
   for(var i=0;i<drops;i++){
      drops.display();
   }

}   

