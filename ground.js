class Ground{
    constructor(x,y,width,height){
      
      var bounc = {isStatic: true}

        this.body = Bodies.rectangle(x,y,width,height,bounc);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        var gr = this.body.position

        fill("red");
        rectMode(CENTER);
        rect(gr.x,gr.y,this.width,this.height);
    }
}