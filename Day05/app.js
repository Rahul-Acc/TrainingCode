Ext.application({
	name : "Day05",
	views : ["GamePanel"],
	launch : function(){
		this.viewport = Ext.create("Ext.container.Viewport",{
			renderTo : Ext.getBody(),
			layout : "card",
			items : [
				{
					xtype : "gamepanel"
				}
			]
		});
	}
});