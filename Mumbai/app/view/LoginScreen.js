Ext.define("Mumbai.view.LoginScreen",{
	extend : "Ext.panel.Panel",
	xtype : "loginscreen",
	title : "Login",
	requires : [
		"Mumbai.view.LoginScreenViewController"
	],
	controller : "login",
	items : [
		{
			xtype : "textfield",
			fieldLabel : "User name",
			reference : "usernametext"
		},
		{
			xtype : "textfield",
			fieldLabel : "Password",
			inputType : "password",
			reference : "passwordtext"
		},
		{
			xtype  : "button",
			text : "Go",
			listeners : {
				click : "onLoginButtonClicked"
			}
		}
	]
});