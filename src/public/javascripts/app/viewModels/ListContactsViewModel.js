define(['services/contactService'], function(contactService) {
	
	var ListContactsViewModel = function() {
		this.contacts = contactService.getContacts();
	}

	return ListContactsViewModel;
});