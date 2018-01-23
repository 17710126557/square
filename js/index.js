var nextData = [
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0]
]
var gameData = [
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,1,1,2,0,0,0],
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
var nextDivs =[];
var gameDivs =[];

function initGame(){
	for(var i=0;i<gameData.length;i++){
		var gameDiv=[];
		for(var j =0; j<gameData[0].length;j++){
			var elem = document.createElement('div');
			elem.style.top= (i*20)+'px';
			elem.style.left=(j*20)+'px';
			elem.className='none';
			gameDiv.push(elem);
			document.querySelector('.game').appendChild(elem);
		}
		gameDivs.push(gameDiv);
	}
}

function initNectGame(){
	for(var i=0;i<nextData.length;i++){
		var gameDiv=[];
		for(var j =0; j<nextData[0].length;j++){
			var elem = document.createElement('div');
			elem.style.top= (i*20)+'px';
			elem.style.left=(j*20)+'px';
			elem.className='none';
			gameDiv.push(elem);
			document.querySelector('.next').appendChild(elem);
		}
		nextDivs.push(gameDiv);
	}
}

function refreshGame(){
	for(var i=0;i<gameData.length;i++){
		for(var j=0;j<gameData[0].length;j++){
			switch(gameData[i][j]){
				case 0:
				gameDivs[i][j].className = 'none';
					break;		
				case 1:
				gameDivs[i][j].className = 'done';
					break;		
				case 2:
				gameDivs[i][j].className = 'current';
					break;
			}

		}
	}
}

function refreshNextGame(){
	for(var i=0;i<gameData.length;i++){
		for(var j=0;j<gameData[0].length;j++){
			switch(gameData[i][j]){
				case 0:
				gameDivs[i][j].className = 'none';
					break;		
				case 1:
				gameDivs[i][j].className = 'done';
					break;		
				case 2:
				gameDivs[i][j].className = 'current';
					break;
			}

		}
	}
}

initGame();
initNectGame();
refreshGame();
refreshNextGame();