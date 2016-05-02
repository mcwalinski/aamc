// Service to manipulate users

angular.module("userServices", ['ngResource'])

.service('userService', function(){
    this.prefix = function(name){
        return "Dr. " + name + " ";
    };        
    this.suffix = function(name){
        return " " + name + " Jr";
    };              
});