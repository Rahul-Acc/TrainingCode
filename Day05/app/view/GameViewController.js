Ext.define("Day05.view.GameViewController",{
	extend : "Ext.app.ViewController",
	alias : "controller.game",
	onPlayButtonClicked : function(){
		this.getViewModel().play();
	}
});