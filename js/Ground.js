class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(600,808,2000,20,ground_options)
          this.ground1 = Bodies.rectangle(25,653,115,1000,ground_options)
          this.ground2 = Bodies.rectangle(1500,653,96,1000,ground_options)
          World.add(world,this.ground);
          World.add(world,this.ground1);
          World.add(world,this.ground2);
    }
    display(){
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,1200,20);
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground1.position.x,this.ground1.position.y,115,1000);
        noStroke();
        fill("black");
        rectMode(CENTER);
        rect(this.ground2.position.x,this.ground2.position.y,96,1000);
    }
}