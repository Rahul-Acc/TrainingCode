Ext.define("Day05.view.GameViewModel",{
	extend : "Ext.app.ViewModel",
	alias : "viewmodel.game",
	config : {
		target : Ext.Number.randomInt(1,100),
		attempts : 0
	},
	data : {
		attemptstext : "",
		messagetext : "",
		guess : -1
	},
	play : function(){
		var guessNum = this.get("guess");
		this.setAttempts(this.getAttempts()+1);
		if(guessNum > this.getTarget())
			this.set("messagetext","Aim Lower");
		else if(guessNum < this.getTarget())
			this.set("messagetext","Aim Higher");
		else
			this.set("messagetext","You've got it!!!");
		this.set("attemptstext","Attempts: " + this.getAttempts() + " ");
	}
});