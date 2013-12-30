define(['knockout', 'jquery', 'text!views/listView.html', 'viewModels/ListContactsViewModel'], 
    function(ko, $, listView, ListContactsViewModel){
     
    function start(){
        $("#app").empty();
        var element = $(listView).appendTo("#app");
        ko.applyBindings(new ListContactsViewModel(), element[0])
    }
     
    return {
        start:start
    };
});