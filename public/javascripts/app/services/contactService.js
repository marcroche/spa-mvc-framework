define(function() {

	var getContacts = function() {
		if(localStorage.contacts !== undefined) {
			return JSON.parse(localStorage.contacts);			
		} else {
			return JSON.parse([]);
		}
	};

	return {
		getContacts: getContacts
	};
});