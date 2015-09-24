Ext.application({
	name : "Mumbai",
	appFolder : "app", //default
	controllers : [],
	models : [],
	stores : [],
	views : ["LoginScreen","home.HomeScreen"],//filenames
	launch : function(){
		this.viewport = Ext.create("Ext.container.Viewport",{
			renderTo : Ext.getBody(),
			layout : "card",
			items : [
				{
					xtype : "loginscreen"
				},
				//{ xtype:"homescreen"}
			]
		});
	}
});