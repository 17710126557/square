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

	var init = (doms) =>{
		gameDiv = doms.gameDiv;
		nextDiv = doms.nextDiv;
		cur  = new Square();
		next = new Square();
		initDiv(gameDiv,gameData,gameDivs);
		initDiv(nextDiv,next.data,nextDivs);
		cur.origin.x = 10;
		cur.origin.y = 5;
		for(var i =0;i<cur.data.length;i++){
			for(var j =0; j<cur.data[0].length;j++){
				gameData[cur.origin.x+i][cur.origin.y+j] = cur.data[i][j]
				console.log(cur.data[i][j]);
			}
		}
		refresDiv(gameData,gameDivs);
		refresDiv(next.data,nextDivs);
	}

	this.init = init;
}