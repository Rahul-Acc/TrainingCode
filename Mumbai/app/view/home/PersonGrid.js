Ext.define("Mumbai.view.home.PersonGrid",{
	extend : "Ext.grid.Panel",
	xtype : "persongrid",
	store : "PersonStore",
	columns : [
		{header:"Name",dataIndex:"name"},
		{header:"Age",dataIndex:"age"}
	]
});