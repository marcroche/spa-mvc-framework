define(['services/contactService', 'models/Contact', 'router'], function(contactService, Contact, router) {

	function AddContactViewModel() {
		this.name = 'AddContactViewModel';

		this.contact = new Contact();

		this.addContact = function() {
			var contacts = contactService.getContacts();
	        contacts.push(this.contact);
	        localStorage.contacts = JSON.stringify(contacts);
	        this.contact = new Contact();
	        router.navigate('#!/list');
		};
	}

	return AddContactViewModel;

});