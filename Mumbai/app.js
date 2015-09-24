Ext.application({
	name : "Mumbai",
	appFolder : "app", //default
	controllers : [],
	models : ["Person"],
	stores : ["PersonStore"],
	views : ["LoginScreen","home.AddPersonPanel","home.PersonGrid","home.HomeScreen"],//filenames
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