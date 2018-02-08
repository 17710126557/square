var Square = function(){
	// 方块数据
	this.data = [
		[0,2,0,0],
		[0,2,0,0],
		[0,2,0,0],
		[0,2,0,0]
	];

	//原点
	this.origin={
		x:0,
		y:0
	}

	//旋转首引
	this.dir = 0;

	//当前旋转点
	this.rotates = [		
		[	
			[0,2,0,0],
			[0,2,0,0],
			[0,2,0,0],
			[0,2,0,0]
		],	
		[	
			[0,0,0,0],
			[2,2,2,2],
			[0,0,0,0],
			[0,0,0,0]
		],
		[	
			[0,2,0,0],
			[0,2,0,0],
			[0,2,0,0],
			[0,2,0,0]
		],
		[	
			[0,0,0,0],
			[2,2,2,2],
			[0,0,0,0],
			[0,0,0,0]
		],
	
	];
}

//旋转
Square.prototype.canRotate = function(isValid){
	this.dir += 1;
	if(this.dir == 4) this.dir = 0;
	var test = [
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0]
	];
	for(var i=0;i<this.data.length;i++){
		for(var j=0;j<this.data[0].length;j++){
			test[i][j] = this.rotates[this.dir][i][j]	
		}
	}
	return isValid(this.origin,test);
}
//旋转
Square.prototype.rotate = function(isValid){
	for(var i=0;i<this.data.length;i++){
		for(var j=0;j<this.data[0].length;j++){
			this.data[i][j] = this.rotates[this.dir][i][j]	
		}
	}
}

// 能否能下降
Square.prototype.canDown = function(isValid){
	var test={
		x:this.origin.x+1,
		y:this.origin.y
	}
	console.log(this.origin.x);
	return isValid(test,this.data);
}
// 能否能下降
Square.prototype.down = function(){
	this.origin.x += 1
}
// 能否能下降
Square.prototype.canLeft = function(isValid){
	var test={
		x:this.origin.x,
		y:this.origin.y - 1
	}
	console.log(this.origin.x);
	return isValid(test,this.data);
}

Square.prototype.left = function(){
	this.origin.y -= 1
}

Square.prototype.canRight = function(isValid){
	var test={
		x:this.origin.x,
		y:this.origin.y+1
	}
	console.log(this.origin.x);
	return isValid(test,this.data);
}
// 能否能下降
Square.prototype.right = function(){
	this.origin.y += 1
}