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