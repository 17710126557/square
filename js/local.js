var Local = function(){
	var game;
	//绑定键盘事件
	var bindKeyEvent = function(){
		document.onkeydown = function(e){
			switch(e.keyCode){
				case 38://up
				break;			
				case 39://right
				break;			
				case 40://down
				game.down();
				console.log('down')
				break;			
				case 37://left
				break;
				case 32://space
				break;
			}
		}

	}
	var start = function(){
		var doms = {
			gameDiv:document.getElementById('game'),
			nextDiv:document.getElementById('next'),
		}
		game = new Game();
		game.init(doms);
		bindKeyEvent();
	}


	//导出API
	this.start = start;

}