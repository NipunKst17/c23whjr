class Box
{
    constructor(x,y,width,height)
    {

    var option = {
        restitution : 1
      }
     
     this.body  = Bodies.rectangle(x,y,width,height,option);
     this.height = height;
     this.width = width;
     World.add(world,this.body);

    // Matter.Body.setAngle(this.body, angle)

    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        fill("blue");
        rectMode(CENTER)
        translate(pos.x,pos.y);
        rotate(angle);
        rect(0,0,this.width,this.height);
        pop();
    }
}