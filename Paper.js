class Paper {
constructor(x,y,r) {
    var options = {
     isStatic:false,
     restitution:0.3,
     friction:0.5,
     density:1.2
       

    }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x,this.y,this.r,options)
    this.image=loadImage("paper.png")
    World.add(world,this.body);

}
display() {

    
    var pos =this.body.position;
    
    push();
    translate(pos.x, pos.y);
    
    ellipseMode(RADIUS);
    strokeWeight(0)
    fill(255,255,255);
    ellipse(0, 0, this.r, this.r);
    imageMode(CENTER);
    image(this.image,0,0,92,92);

    pop()
}
}