Ext.define("Day05.view.GamePanel",{
	extend : "Ext.panel.Panel",
	xtype  : "gamepanel",
	title : "Guessing Game",
	requires : [
		"Day05.view.GameViewController",
		"Day05.view.GameViewModel",
	],
	viewModel : "game",
	controller : "game",
	items : [
		{
			xtype : "textfield",
			fieldLabel : "Enter your guess",
			bind : "{guess}"
		},
		{
			xtype : "button",
			text : "Play",
			listeners : {
				click : "onPlayButtonClicked"
			}
		},
		{
			xtype : "label",
			bind : "{attemptstext}"
		},
		{
			xtype : "label",
			bind : "{messagetext}"
		}
	]
});