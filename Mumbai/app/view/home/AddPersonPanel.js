Ext.define("Mumbai.view.home.AddPersonPanel",{
	extend : "Ext.panel.Panel",
	xtype : "addpersonpanel",
	items : [
		{
			xtype : "textfield",
			fieldLabel : "Name",
			reference : "nametext"
		},
		{
			xtype : "textfield",
			fieldLabel : "Age",
			reference : "agetext"
		},
		{
			xtype : "button",
			text : "Add",
			listeners : {
				click : "addPerson"
			}
		}
	]
});