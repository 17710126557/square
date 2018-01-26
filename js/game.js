var Game = function(){
	// dom
	var gameDiv;
	var nextDiv;
	var gameData = [
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],	
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],	
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],	
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0]
	]
	// 存放渲染divs
	var nextDivs =[];
	var gameDivs =[];
	// 当前
	var cur,next;

	//初始化方块位置
	var initDiv = (container,data,divs)=>{
		for(var i=0;i<data.length;i++){
			var div=[];
			for(var j =0; j<data[0].length;j++){
				var elem = document.createElement('div');
				elem.style.top= (i*20)+'px';
				elem.style.left=(j*20)+'px';
				elem.className='none';
				div.push(elem);
				container.appendChild(elem);
			}
			divs.push(div);
		}
	}

	//刷新方块 
	var refresDiv = (data,divs)=>{
		for(var i=0;i<data.length;i++){
			for(var j=0;j<data[0].length;j++){
				switch(data[i][j]){
					case 0:
					divs[i][j].className = 'none';
						break;		
					case 1:
					divs[i][j].className = 'done';
						break;		
					case 2:
					divs[i][j].className = 'current';
						break;
				}

			}
		}
	}

	// 设置数据
	var setData = function(){
		for(var i =0;i<cur.data.length;i++){
			for(var j =0; j<cur.data[0].length;j++){
				if(checkValid(cur.origin,i,j)){
					gameData[cur.origin.x+i][cur.origin.y+j] = cur.data[i][j];	
				}
			}
		}
	}

	// 清除数据
	var clearData = function(){
		for(var i =0;i<cur.data.length;i++){
			for(var j =0; j<cur.data[0].length;j++){
				if(checkValid(cur.origin,i,j)){
					gameData[cur.origin.x+i][cur.origin.y+j] = 0;
				};
			}
		}
	}
	
	// 检查数据是否合法
	var checkValid = function(pos,x,y){
		// console.log('pos',pos,x,y);
		if(pos.x + x < 0){
			return false;
		}else if(pos.x + x >= gameData.length){
			return false
		}else if(pos.y + y >= gameData[0].length){
			return false;
		}else if(pos.y + y < 0){
			return false;
		}else if(gameData[pos.x + x][pos.y + y] == 1){
			return false;
		}else{
			return true
		}
	}

	//数据是否还能下降
	var isValid = function(pos,data){
		console.log('r t',pos);
		for(var i = 0;i<data.length;i++){
			for(var j =0; j<data[0].length;j++){
				if(data[i][j] != 0){
					if(!checkValid(pos,i,j)){
						return false;
					};
				}
		
			}
		}
		return true;
	}

	// 向下
	var down = function(){
		if(cur.canDown(isValid)){
			clearData();
			cur.down();
			setData();
			refresDiv(gameData,gameDivs);
		}

	}

	//初始化 
	var init = (doms) =>{
		gameDiv = doms.gameDiv;
		nextDiv = doms.nextDiv;
		cur  = new Square();
		next = new Square();
		initDiv(gameDiv,gameData,gameDivs);
		initDiv(nextDiv,next.data,nextDivs);
		cur.origin.x = 13;
		cur.origin.y = 5;
		setData();
		refresDiv(gameData,gameDivs);
		refresDiv(next.data,nextDivs);
	}

	this.init = init;
	this.down = down;
}