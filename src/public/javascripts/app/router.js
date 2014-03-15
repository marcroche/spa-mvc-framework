define(['jquery', 'sammy'], function($, sammy){
 
    var app = sammy("#app", function () {
                
    });

    var start = function () {
              
        app.get('#!/list', function (context) {
            console.log('list route');
            loadController('listController');
        });
            
        app.get('#!/add', function (context) {
            console.log('add route');
            loadController('addController');
        });

        app.get('#!/update', function (context) {
            console.log('update route');
            loadController('updateController');
        });

        app.run("#/");
            
    };

    var loadController = function(controllerName) {
        require(['controllers/' + controllerName], function(controller) {
            controller.start();
        });
    };

    var navigate = function(url) {
        window.location.href = url;
    };

    return {
        start: start,
        navigate: navigate
    };
});