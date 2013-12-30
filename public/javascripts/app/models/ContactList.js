define(['app/models/Contact', 'vendor/underscore/underscore'], function(Contact, _) {
	function ContactList() {
		this.contacts = [];
		if(localStorage.contacts !== '') {
			this.contacts = JSON.parse(localStorage.contacts);
		}		
	}

	ContactList.prototype.addContact = function(firstName, lastName, street, city, state, zip, phone, email) {	
		this.contacts.push(new Contact(firstName, lastName, street, city, state, zip, phone, email));
		localStorage.contacts = JSON.stringify(this.contacts);
	}

	return ContactList;
});