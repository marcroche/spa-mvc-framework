define(['knockout', 'jquery', 'text!views/addView.html', 'viewModels/AddContactViewModel', 'router'], 
    function(ko, $, addView, AddContactViewModel, router){
 
    function start() {
        $("#app").empty();
        var element = $(addView).appendTo("#app");
        ko.applyBindings(new AddContactViewModel(), element[0]);
    }
 
    return {
        start: start
    };
});