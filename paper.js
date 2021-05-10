class Paper{
	constructor(x,y,radius)
	{
			var options={
				isStatic:false,
				restitution:4,
				friction:2,
				density:0.2	
	
				}
		
			this.body=Bodies.circle(x, y, radius, options);
			this.radius = radius;
			 World.add(world, this.body);

	}
	display()
	{
			

		
				
	
	
				ellipseMode(RADIUS)
				//strokeWeight(4);
				fill("yellow")
				circle(this.body.position.x,this.body.position.y,this.radius);
				
	
			

		
			
	}

}