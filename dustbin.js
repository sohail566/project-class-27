class Dustbin
{
	constructor(x,y,width,height)
	{
			var options={
				isStatic:true,
				restitution:4,
				friction:2,
				density:0.2	
				
				}
		
			this.body=Bodies.rectangle(x, y, width, height , options);
			this.width = width;
			this.height = this.height;
			this.image = loadImage("dustbingreen.png");
			 World.add(world, this.body);

	}
	display()
	{
			

		imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y, this.width, this.height);
				
	
	
				//strokeWeight(4);
			
				
	
			

		
			
	}

}