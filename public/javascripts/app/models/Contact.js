define(function() {
	function Contact(firstName, lastName, street, city, state, zip, phone, email) {
		this.id = guid();
		this.firstName = firstName || '';
		this.lastName = lastName || '';
		this.street = street || '';
		this.city = city || '';
		this.state = state || '';
		this.zip = zip || '';
		this.phone = phone || '';
		this.email = email || '';

		function s4() {
  			return Math.floor((1 + Math.random()) * 0x10000)
             	.toString(16)
             	.substring(1);
		};

		function guid() {
  			return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
         		s4() + '-' + s4() + s4() + s4();
		}
	}

	return Contact;
});