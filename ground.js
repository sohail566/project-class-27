class Ground
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true,
			restitution:4,
			friction:2	

			}
	
		this.body=Bodies.rectangle(x, y, width, height , options);
		this.width = width;
		this.height = this.height;
 		World.add(world, this.body);

	}
	display()
	{
			


			rectMode(CENTER)
			//strokeWeight(4);
			fill("green")
			rect(this.body.position.x,this.body.position.y,this.width,this.height);
			
	}

}