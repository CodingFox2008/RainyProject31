class Drop{
    constructor(x,y){
        var options={
            friction: 0.1,
        }
        this.body = Bodies.circle(x,y,20,options);
        this.r = 20;
        World.add(world,this.body);
    }
    

    display(){
        var pos = this.body.position;
        ellispeMode(RADIUS);
        fill('blue');
        ellispe(pos.x,pos.y,this.r,this.r);
    }

}
if(this.drops.position.y > height){
   
    Matter.Body.setPosition(this.drops,{x:random(0,400), y:random(0,400)})
    
 }