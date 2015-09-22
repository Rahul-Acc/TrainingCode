Ext.define("Game",{
	config : {
		target : -1,
		attempts : 0,
		message : "",
		gameOver : false
	},
	constructor : function(){
		this.initConfig();
		this.setTarget(Ext.Number.randomInt(1,100));
		console.log(this.getTarget());
	},
	play : function(guess){
		this.setAttempts(this.getAttempts()+1);
		if(guess > this.getTarget())
			this.setMessage("Aim Lower");
		else if(guess < this.getTarget())
			this.setMessage("Aim Higher");
		else{
			this.setMessage("You've got it in " + this.getAttempts() + " attempts");
			this.setGameOver(true);
		}
	}
});