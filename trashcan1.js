class trashcan1 extends Dustbinclass{
    constructor(x,y,height,angle){
      super(x,y,20,height,angle);
      this.image = loadImage("trashcan.png/trashcangreen.png");
      Matter.Body.setAngle(this.body, angle);
    }
  }