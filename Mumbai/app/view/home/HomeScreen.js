Ext.define("Mumbai.view.home.HomeScreen",{
	extend : "Ext.panel.Panel",
	xtype : "homescreen",
	title : "Welcome home",
	requires : [
		"Mumbai.view.home.HomeScreenViewController"
	],
	controller : "home",
	items : [
		{
			xtype : "addpersonpanel"
		},
		{
			xtype : "persongrid"
		}
	]
});