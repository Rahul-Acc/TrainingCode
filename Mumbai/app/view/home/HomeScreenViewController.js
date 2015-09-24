Ext.define("Mumbai.view.home.HomeScreenViewController",{
	extend : "Ext.app.ViewController",
	alias : "controller.home",
	addPerson : function(){
		var name = this.lookupReference("nametext").getValue();
		var age = this.lookupReference("agetext").getValue();
		var personStore = Mumbai
							.getApplication()
							.getStore("PersonStore");
		personStore.add({name:name,age:age});					
	}
});