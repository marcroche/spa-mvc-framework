requirejs.config({
	paths: {
		'text' : '../vendor/requirejs-text/text',
        'knockout': '../vendor/knockoutjs/knockout-2.3.0',
        'komapping': '../vendor/knockout-mapping/knockout.mapping',
        'jquery': '../vendor/jquery/jquery.min',
        'sammy': '../vendor/sammy/lib/min/sammy-0.7.4.min'
	},
    shim: {
        'vendor/underscore/underscore': {
            exports: '_'
        },
        'komapping': {
            deps: ['knockout'],
            exports: 'komapping'
        },
        'sammy': {
            deps: ['jquery'],
            exports: 'Sammy'
        }
    }
});

require(['router', 'knockout'], 
	function(router, ko){

    //var contacts = JSON.parse(localStorage.contacts);
    //localStorage.contacts = JSON.stringify([]);;
    router.start();
    ko.applyBindings({});
});